import '@/static/css/main.scss';
import Navigation from '@/components/Template/Navigation';
import SideBar from '@/components/Template/SideBar';
import ScrollToTop from '@/components/Template/ScrollToTop';
import GoogleAnalytics from '@/components/Template/GoogleAnalytics';

export const metadata = {
  title: {
    default: 'Liang Tang',
    template: '%s | Liang Tang',
  },
  description: "Liang Tang's personal website.",
  authors: [{ name: 'Liang Tang' }],
  creator: 'Liang Tang',
  icons: {
    icon: [
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/images/favicon/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/images/favicon/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/images/favicon/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/images/favicon/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/images/favicon/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/images/favicon/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/images/favicon/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/images/favicon/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/images/favicon/manifest.json',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/images/favicon/ms-icon-144x144.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="renderer" content="webkit" />
        <meta name="google" content="notranslate" />
        <link
          href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?64e55e3e7cab6444abaf62b1690b2a56";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      </head>
      <body>
        <ScrollToTop />
        <div id="wrapper">
          <Navigation />
          <div id="main">
            {children}
          </div>
          <SideBar />
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
