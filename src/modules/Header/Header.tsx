'use client';
import Image from 'next/image';

import { BurgerMenuModal, Button, InternalLink } from '@/components';
import { HEADER_TEST_ID } from '@/lib/testIds';

import type { HeaderProps } from './types';

const Header = ({ data }: HeaderProps) => {
  if (!data) return null;

  const { image, button, iconButton, menu, contacts } = data;

  function goToForm() {
    window.location.href = '/#contactForm';
  }

  return (
    <header
      data-testid={HEADER_TEST_ID}
      className="sticky top-0 left-0 z-20 h-(--height-header-mobile) w-screen bg-(--color-bg-primary) lg:h-(--height-header)"
    >
      <div className="relative flex h-full w-full items-center justify-between px-4 py-4 lg:px-8 lg:py-8">
        <div className="z-10 flex items-center justify-center gap-4 xl:gap-15.5">
          <BurgerMenuModal
            buttonText={iconButton.title}
            menu={menu}
            contacts={contacts}
          />
        </div>

        <InternalLink
          href="/"
          className="absolute top-1/2 left-1/2 ml-4 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 md:ml-0"
        >
          <Image
            src={image?.src}
            alt={image?.alt}
            width={67}
            height={75}
            className="h-14 w-12 object-cover sm:h-14 sm:w-12 md:h-16 md:w-14 lg:h-[75px] lg:w-[67px]"
          />
          <span className="text-[10px] leading-tight font-bold md:text-[12px] lg:text-sm">
            1 батальйон територіальної оборони
            <br />
            119 окремої бригади
            <br />
            територіальної
            <br />
            оборони
          </span>
        </InternalLink>

        <div className="mr-5 hidden lg:block">
          <Button
            variant="primary"
            onClick={goToForm}
            className="text-base font-bold"
          >
            {button.title}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
