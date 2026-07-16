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
import { getCurrentYear, goToForm } from '@/utils';

import type { FooterProps } from './types';

const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  const { image, menu, button, legal, contacts } = data;
  const currentYear = getCurrentYear();
  const messengers = Object.entries(contacts.messengers);

  return (
    <footer className="bg-(--color-bg-secondary)" data-testid={FOOTER_TEST_ID}>
      <Container className="py-4 lg:py-10">
        <div className="mb-6 flex items-baseline justify-between lg:mb-8 xl:mb-10">
          <div className="flex flex-col gap-15">
            <div className="flex flex-col items-start gap-5 md:flex-row md:gap-3">
              <div className="translate-y-[-2px] text-2xl leading-none font-semibold md:text-xl">
                &#x1D468;
              </div>

              <div className="text-base leading-[1.1] font-semibold md:text-2xl">
                Сили
                <br />
                територіальної
                <br />
                оборони
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-3">
              <Image src={image.src} alt={image.alt} width={73} height={90} />

              <span className="text-[10px] leading-[1.3] font-bold md:text-[12px] lg:text-sm">
                1 батальйон територіальної оборони
                <br />
                119 окремої бригади
                <br />
                територіальної
                <br />
                оборони
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end">
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
              <address className="flex flex-col gap-3 not-italic md:gap-5 lg:text-2xl xl:flex-row">
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
                className="max-w-80 text-base leading-[1.1] font-semibold tracking-normal md:leading-1.5 md:font-bold lg:px-8 lg:py-4 lg:text-[22px] lg:leading-none"
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
