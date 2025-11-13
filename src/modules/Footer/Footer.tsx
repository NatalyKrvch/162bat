'use client';
import Image from 'next/image';

import {
  Button,
  Container,
  Divider,
  ExternalLink,
  IconLink,
  MenuItemLink,
  Navigation,
} from '@/components';
import { MenuItemVariant } from '@/components/Links/MenuItemLink/MenuItemLink.variants';
import { NavigationVariant } from '@/components/Navigation/Navigation.variants';
import { FOOTER_TEST_ID } from '@/lib/testIds';
import { getCurrentYear } from '@/utils';

import type { FooterProps } from './types';

const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  const { image, menu, button, legal, contacts } = data;
  const currentYear = getCurrentYear();
  const messengers = Object.entries(contacts.messengers);

  function goToForm() {
    window.location.href = '/#contactForm';
  }

  return (
    <footer className="bg-(--color-bg-secondary)" data-testid={FOOTER_TEST_ID}>
      <Container className="py-4 lg:py-10">
        <div className="mb-6 flex items-start justify-between lg:mb-8 xl:mb-10">
          <Image src={image.src} alt={image.alt} width={83} height={100} />

          <div>
            <Navigation variant={NavigationVariant.Footer}>
              {menu.map(item => (
                <li key={item.title}>
                  <MenuItemLink
                    href={item.href}
                    variant={MenuItemVariant.FooterItem}
                    text={item.title}
                  />
                </li>
              ))}
            </Navigation>

            <div className="mb-10 flex flex-col items-center justify-between gap-6 lg:gap-8 xl:flex-row">
              <address className="flex flex-col gap-3 not-italic md:flex-row md:gap-5 lg:text-2xl">
                {contacts.phoneNumbers.map(phoneNumber => (
                  <ExternalLink key={phoneNumber} href={`tel:${phoneNumber}`}>
                    {phoneNumber}
                  </ExternalLink>
                ))}
              </address>

              <div className="flex gap-5 md:gap-4 lg:text-xl">
                {messengers.map(([name, data]) => (
                  <IconLink key={name} link={data.link} icon={data.icon} />
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                variant="primary"
                className="max-w-80 text-base leading-1.5 font-bold tracking-normal lg:px-8 lg:py-4 lg:text-[22px] lg:leading-none"
                onClick={goToForm}
              >
                {button.title}
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-5 xl:mb-7">
          <Divider variant="grey" />
        </div>

        <small className="text-base xl:text-lg">
          {currentYear} © {legal}
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
