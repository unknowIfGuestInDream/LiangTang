'use client';

import Link from 'next/link';
import { useState } from 'react';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
                className="menu-hover"
              >
                &#10005;
              </button>
            </li>
          ) : (
            <li className="menu open-menu">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
                className="menu-hover"
              >
                &#9776;
              </button>
            </li>
          )}
        </ul>
      </nav>
      {open && (
        <div
          className="bm-menu-wrap"
          style={{
            position: 'fixed',
            right: 0,
            top: 0,
            height: '100%',
            width: '300px',
            zIndex: 1100,
          }}
        >
          <div
            className="bm-menu"
            style={{
              height: '100%',
              width: '100%',
              padding: '2.5em 1.5em',
              background: '#373a47',
              overflowY: 'auto',
            }}
          >
            <ul className="hamburger-ul">
              {routes.map((l) => (
                <li key={l.label}>
                  <Link href={l.path} onClick={() => setOpen(false)}>
                    <h3 className={l.index ? 'index-li' : undefined}>
                      {l.label}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="bm-overlay"
            tabIndex={0}
            aria-label="Close menu"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.3)',
              zIndex: -1,
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Hamburger;
