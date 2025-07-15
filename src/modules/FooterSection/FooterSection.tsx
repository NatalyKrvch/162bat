import Image from 'next/image';

import { Button, Divider, InternalLink } from '@/components';
import { FOOTER_TEST_ID } from '@/lib/testIds';

import useCurrentYear from './hooks/useCurrentYear';
import type { FooterProps } from './types';

const FooterSection = ({ data, onClick }: FooterProps) => {
  const currentYear = useCurrentYear();

  if (!data) return null;
  const { image, menu, contactUs, button, legal } = data;

  return (
    <footer
      data-testid={FOOTER_TEST_ID}
      className="bg-bg-secondary container mx-auto flex flex-col flex-wrap items-center gap-5.5 px-8 py-10 sm:items-start md:gap-8 lg:gap-10"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-12 md:gap-20 lg:gap-30">
        <div className="flex h-25 w-21 flex-shrink-0">
          <Image
            src={image.src}
            width={84}
            height={100}
            alt={image.alt}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-10 lg:items-center">
          <ul className="flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-x-11">
            {menu.map(item => (
              <li key={item.title}>
                <InternalLink
                  title={item.title}
                  href={item.href}
                  className="hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary min-w-fit text-base/4 font-bold sm:text-xl/5"
                >
                  {item.title}
                </InternalLink>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:gap-21">
            <div className="flex flex-col gap-2 sm:flex-row md:items-center">
              <p className="text-base/6 whitespace-nowrap sm:text-xl/5">
                {contactUs.title}
              </p>
              <InternalLink
                href={`tel:${contactUs.number}`}
                className="hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary min-w-fit text-base/4 font-bold sm:text-xl/5"
              >
                {contactUs.number}
              </InternalLink>
            </div>
            <Button
              title={button.title}
              aria-label={button.title}
              className="flex items-center p-3 whitespace-nowrap sm:w-fit sm:px-8 sm:py-5 lg:h-15"
              onClick={onClick}
            >
              {button.title}
            </Button>
          </div>
        </div>
      </div>
      <Divider variant="grey" />
      <div className="flex items-center">{currentYear + ' ' + legal}</div>
    </footer>
  );
};

export default FooterSection;
