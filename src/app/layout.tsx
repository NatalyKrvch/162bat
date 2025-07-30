import '@style/globals.css';

import footerData from '@data/footerSectionData.json';
import headerData from '@data/headerSectionData.json';
import { Play } from 'next/font/google';
import { ReactNode } from 'react';

import { Header } from '@/modules';
import { Footer } from '@/modules/Footer';

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="uk" className={play.className}>
      <body>
        <Header data={headerData} />
        {children}
        <Footer data={footerData} />
      </body>
    </html>
  );
};

export default layout;
