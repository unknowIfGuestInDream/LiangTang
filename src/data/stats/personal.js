import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-03-21T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'hometown',
    label: 'Hometown',
    value: 'DaLian',
    link:
      'https://en.wikipedia.org/wiki/Dalian',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'Mandarin, English, Japanese',
  },
  {
    key: 'real',
    label: 'Real languages',
    value: 'Java, Go, Python',
  },
];

export default data;
