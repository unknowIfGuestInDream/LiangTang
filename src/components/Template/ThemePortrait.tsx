import { AUTHOR_NAME } from '@/lib/utils';

interface ThemePortraitProps {
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

/**
 * Portrait component.
 *
 * Renders the user's initials as a CSS-styled circle so that no portrait
 * image needs to be shipped with the static export.
 */
export default function ThemePortrait({
  width,
  height,
  priority: _priority = false,
  className = '',
}: ThemePortraitProps) {
  const initials = AUTHOR_NAME.split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 2);

  return (
    <span
      className={`theme-portrait ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
        borderRadius: '50%',
        background:
          'linear-gradient(135deg, var(--color-skill-1, #6968b3), var(--color-skill-4, #515dd4))',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: Math.round(width * 0.4),
        lineHeight: 1,
        userSelect: 'none',
      }}
      aria-label={AUTHOR_NAME}
      role="img"
    >
      {initials}
    </span>
  );
}
