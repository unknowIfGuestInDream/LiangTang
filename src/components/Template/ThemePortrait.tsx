import Image from 'next/image';

import { AUTHOR_NAME } from '@/lib/utils';

interface ThemePortraitProps {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export default function ThemePortrait({
  width,
  height,
  priority = false,
  className = '',
}: ThemePortraitProps) {
  return (
    <span className={`theme-portrait ${className}`}>
      <Image
        src="/images/me.jpg"
        alt={AUTHOR_NAME}
        width={width}
        height={height}
        priority={priority}
      />
    </span>
  );
}
