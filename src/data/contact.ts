import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBlogger } from '@fortawesome/free-brands-svg-icons/faBlogger';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/unknowIfGuestInDream',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.cn/incareer/in/亮-唐-80351a201',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://blog.tlcsdm.com',
    label: 'Blog',
    icon: faBlogger,
  },
  {
    link: 'https://twitter.com/unknowIfGuest',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:liang.tang.cx@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
