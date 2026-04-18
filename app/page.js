import Link from 'next/link';

export const metadata = {
  description:
    "Liang Tang's personal website. A java developer working in Dalian.",
};

export default function HomePage() {
  return (
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link href="/">WELCOME 欢迎</Link>
          </h2>
        </div>
      </header>
      <p>
        Welcome to my website. Please feel free to read more{' '}
        <Link href="/about">about me</Link>, or you can check out my{' '}
        <Link href="/resume">resume</Link>,{' '}
        <Link href="/projects">projects</Link>, view{' '}
        <Link href="/stats">site statistics</Link>, or{' '}
        <Link href="/contact">contact</Link> me.
      </p>
    </article>
  );
}
