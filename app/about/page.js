import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';

export const metadata = {
  title: 'About',
  description: 'Learn about Liang Tang',
};

function getAboutMarkdown() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'about.md');
  return fs.readFileSync(filePath, 'utf-8');
}

export default function AboutPage() {
  const markdown = getAboutMarkdown();
  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <Markdown>{markdown}</Markdown>
    </article>
  );
}
