export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'SpringBoot',
    competency: 5,
    category: ['Spring', 'Tools', 'Web Development'],
  },
  {
    title: 'SpringCloud',
    competency: 4,
    category: ['Spring', 'Tools', 'Web Development'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Javascript', 'Languages', 'Web Development'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Javascript', 'Languages', 'Web Development'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Javascript', 'Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Javascript', 'Web Development'],
  },
  {
    title: 'Extjs',
    competency: 5,
    category: ['Javascript', 'Tools', 'Web Development'],
  },
  {
    title: 'Antd Design Pro',
    competency: 4,
    category: ['Javascript', 'Tools', 'Web Development'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Oracle',
    competency: 5,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Mysql',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'MariaDB',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Databases', 'Languages', 'Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Nginx',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Tencent Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Systems'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['Systems'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
const CATEGORY_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: 'var(--color-skill-1)', textColor: 'light' },
  { color: 'var(--color-skill-2)', textColor: 'dark' },
  { color: 'var(--color-skill-3)', textColor: 'light' },
  { color: 'var(--color-skill-4)', textColor: 'light' },
  { color: 'var(--color-skill-5)', textColor: 'dark' },
  { color: 'var(--color-skill-6)', textColor: 'dark' },
];

// Fallback colors for categories beyond the predefined set (with pre-computed contrast)
const FALLBACK_COLORS: { color: string; textColor: 'dark' | 'light' }[] = [
  { color: '#3896e2', textColor: 'dark' },
  { color: '#c3423f', textColor: 'light' },
  { color: '#d75858', textColor: 'light' },
  { color: '#747fff', textColor: 'light' },
  { color: '#64cb7b', textColor: 'dark' },
];

/**
 * Build categories from skills with type-safe color assignment.
 * Logs a warning in development if there are more categories than colors.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  const allColors = [...CATEGORY_COLORS, ...FALLBACK_COLORS];

  if (
    process.env.NODE_ENV === 'development' &&
    uniqueCategories.length > allColors.length
  ) {
    console.warn(
      `[skills.ts] Warning: ${uniqueCategories.length} categories but only ${allColors.length} colors defined`,
    );
  }

  return uniqueCategories.map((category, index) => {
    const colorConfig = allColors[index] ?? {
      color: '#888888',
      textColor: 'light' as const,
    };
    return {
      name: category,
      color: colorConfig.color,
      textColor: colorConfig.textColor,
    };
  });
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
