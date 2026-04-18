import Link from 'next/link';
import Personal from '@/components/Stats/Personal';

export const metadata = {
  title: 'Stats',
  description: 'Some statistics about Liang Tang',
};

export default function StatsPage() {
  return (
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link href="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  );
}
