/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Ipdchina',
    position: 'Java Engineer',
    url: 'http://www.ipdchina.net/',
    startDate: '2022-04-01',
    summary: 'Development for Smart Configurator.',
    highlights: ['Development for Smart Configurator.'],
  },
  {
    name: 'Newangels',
    position: 'Java Engineer',
    url: 'http://www.newangels.cn/',
    startDate: '2019-11-01',
    endDate: '2022-04-01',
    summary: 'Development for MES systems.',
    highlights: [
      'Development for MES systems.',
      'Lead a team in research, design, development and deployment of systems.',
    ],
  },
];

export default work;
