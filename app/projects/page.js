import Link from 'next/link';
import Cell from '@/components/Projects/Cell';
import data from '@/data/projects';

export const metadata = {
  title: 'Projects',
  description: "Learn about Liang Tang's projects.",
};

export default function ProjectsPage() {
  return (
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  );
}
