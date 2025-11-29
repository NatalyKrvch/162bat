import '@style/globals.css';

import contactsData from '@data/contactsData.json';
import footerSectionData from '@data/footerSectionData.json';
import headerSectionData from '@data/headerSectionData.json';
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
  metadataBase: new URL('https://162bat.vercel.app'), // TODO: change for prod domain
  title:
    '1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
  description:
    'Долучайся до 1 батальйону 119 окремої бригади територіальної оборони. Дізнайся про умови служби, гарантії, вакансії та подай заявку на вступ.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: '/',
    title:
      '1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
    description:
      'Набір до 1 батальйону територіальної оборони 119 окремої бригади територіальної оборони. Захищай свою країну разом з нами.',
    siteName:
      '1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 800,
        alt: 'Емблема 1 батальйону територіальної оборони 119 окремої бригади територіальної оборони',
      },
    ],
  },
};

const headerData = {
  ...headerSectionData,
  contacts: contactsData,
};

const footerData = {
  ...footerSectionData,
  contacts: contactsData,
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
