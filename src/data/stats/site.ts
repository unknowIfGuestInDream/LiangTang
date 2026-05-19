import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/unknowIfGuestInDream/LiangTang
 */
const data: StatData[] = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/unknowIfGuestInDream/LiangTang/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
];

export default data;
