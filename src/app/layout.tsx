import '@style/globals.css';

import { Play } from 'next/font/google';
import { ReactNode } from 'react';

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="uk" className={play.className}>
      <body>{children}</body>
    </html>
  );
};

export default layout;
