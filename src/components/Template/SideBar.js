'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <img src="/images/me.jpg" alt="" />
        </Link>
        <header>
          <h2>Liang Tang</h2>
          <p>
            <a href="mailto:liang.tang.cx@gmail.com">liang.tang.cx@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Liang Tang. I like building things. I am a java engineer
          of <a href="http://www.ipdchina.net/japanese/index.html">Ipdchina</a>,
          and good at web development ,javafx GUI and Eclipse RCP development .
        </p>
        <ul className="actions">
          <li>
            {!pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>
      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Liang Tang <Link href="/">tlcsdm.com</Link>.{' '}
        </p>
        <p className="copyright">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            辽ICP备2021000033号-1
          </a>
        </p>
        <p className="copyright">
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=21020302000532"
            rel="noreferrer"
            target="_blank"
          >
            辽公网安备21020302000532
          </a>
        </p>
      </section>
    </section>
  );
};

export default SideBar;
