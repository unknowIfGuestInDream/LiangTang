import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => lazyRetry(() => import(/* webpackChunkName: "main-app" */ './pages/Index'), "main-app"));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const lazyRetry = function(componentImport, name) {
    return new Promise((resolve, reject) => {
        // 检查是否已经刷新过了
        const hasRefreshed = JSON.parse(
            window.sessionStorage.getItem(`${name}-retry-lazy-refreshed`) || 'false'
        );
        // 动态导入组件
        componentImport().then((component) => {
            window.sessionStorage.setItem(`${name}-retry-lazy-refreshed`, 'false'); 
            resolve(component);
        }).catch((error) => {
            if (!hasRefreshed) { // 没有刷新过，需要刷新页面刷新
                window.sessionStorage.setItem(`${name}-retry-lazy-refreshed`, 'true'); 
                return window.location.reload(); // 
            }
            reject(error); 
        });
    });
}

export default App;
