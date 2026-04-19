import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Liang Tang</span>
        </h1>

        <p className="hero-tagline">
          Java engineer at{' '}
          <a href="http://www.ipdchina.net/" className="hero-highlight">
            Ipdchina
          </a>
          , based in Dalian. I build tools and IDE plugins, mostly with{' '}
          <a
            href="https://github.com/unknowIfGuestInDream"
            className="hero-highlight"
          >
            Java, JavaFX and Eclipse RCP
          </a>
          .
          <br />
          In my spare time I study Japanese and tinker with side projects.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Java &amp; JavaFX</span>
          <span className="hero-chip">Eclipse RCP</span>
          <span className="hero-chip">VSCode &amp; Eclipse plugins</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
