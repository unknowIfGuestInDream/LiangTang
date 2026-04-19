import Link from 'next/link';
import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';

export const metadata = {
  title: 'Contact',
  description: 'Contact Liang Tang via email @ liang.tang.cx@gmail.com',
};

export default function ContactPage() {
  return (
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link href="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  );
}
