import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link href="/">home</Link>.</p>
    </div>
  );
}
