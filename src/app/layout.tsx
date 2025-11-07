import '@style/globals.css';

import footerData from '@data/footerSectionData.json';
import headerData from '@data/headerSectionData.json';
import { type Metadata } from 'next';
import localFont from 'next/font/local';
import { type ReactNode } from 'react';

import { Header } from '@/modules';
import { Footer } from '@/modules/Footer';

const uafSans = localFont({
  src: [
    { path: '../fonts/UAFSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/UAFSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/UAFSans-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/UAFSans-Bold.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-uaf-sans',
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
    <html lang="uk" className={uafSans.variable}>
      <body>
        <Header data={headerData} />
        {children}
        <Footer data={footerData} />
      </body>
    </html>
  );
};

export default layout;
