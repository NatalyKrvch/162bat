import '@/style/globals.css';

import { Nunito_Sans } from 'next/font/google';
import { ReactNode } from 'react';

const nunitoSans = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="uk" className={nunitoSans.className}>
      <body>{children}</body>
    </html>
  );
};

export default layout;
