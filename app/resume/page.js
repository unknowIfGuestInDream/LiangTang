import Link from 'next/link';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import Skills from '@/components/Resume/Skills';
import degrees from '@/data/resume/degrees';
import positions from '@/data/resume/positions';
import { categories, skills } from '@/data/resume/skills';

export const metadata = {
  title: 'Resume',
  description:
    "Liang Tang's Resume. Dalian Jiaotong University, Newangels and Ipdchina.",
};

const sections = ['Education', 'Experience', 'Skills', 'References'];

export default function ResumePage() {
  return (
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link href="/resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <References />
    </article>
  );
}
