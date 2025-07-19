import Image from 'next/image';

import { Button, Container, Divider, InternalLink } from '@/components';
import { FOOTER_TEST_ID } from '@/lib/testIds';
import { getCurrentYear } from '@/utils';

import type { FooterProps } from './types';

const Footer = ({ data, onClick }: FooterProps) => {
  if (!data) return null;

  const { image, menu, contactUs, button, legal } = data;
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-(--color-bg-secondary)" data-testid={FOOTER_TEST_ID}>
      <Container className="py-4 lg:py-10">
        <div className="mb-6 flex items-start justify-between lg:mb-8 xl:mb-10">
          <Image src={image.src} alt={image.alt} width={83} height={100} />

          <div>
            <nav aria-label="Footer menu">
              <ul className="mb-10 flex flex-col gap-2 sm:flex-row md:gap-x-11">
                {menu.map(item => (
                  <li key={item.title}>
                    <InternalLink
                      href={item.href}
                      className="hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary min-w-fit text-base leading-none font-bold tracking-normal lg:text-xl"
                    >
                      {item.title}
                    </InternalLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-20">
              <p className="flex flex-col gap-0.5 md:flex-row md:gap-4 lg:text-xl">
                <span className="whitespace-nowrap">{contactUs.title}</span>

                <a
                  href={`tel:${contactUs.number}`}
                  aria-label={`Call ${contactUs.number}`}
                  className="font-bold whitespace-nowrap"
                >
                  {contactUs.number}
                </a>
              </p>

              <Button
                variant="primary"
                onClick={onClick}
                className="text-base leading-1.5 font-bold tracking-normal lg:px-8 lg:py-4 lg:text-[22px] lg:leading-none"
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
