import '@style/globals.css';

import footerData from '@data/footerSectionData.json';
import headerData from '@data/headerSectionData.json';
import { type Metadata } from 'next';
import { Play } from 'next/font/google';
import { type ReactNode } from 'react';

import { Header } from '@/modules';
import { Footer } from '@/modules/Footer';

const play = Play({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    '1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
  description: 'Захищай свою країну разом з нами',
  icons: {
    icon: '/favicon.svg',
  },
};

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
