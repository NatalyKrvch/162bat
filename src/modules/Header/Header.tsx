import Image from 'next/image';

import { BurgerMenuModal, Button, ExternalLink } from '@/components';
import { HEADER_TEST_ID } from '@/lib/testIds';

import type { HeaderProps } from './types';

const Header = ({ data, onClick }: HeaderProps) => {
  if (!data) return null;

  const { image, number, button, iconButton, menu, contacts } = data;

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
          <ExternalLink
            href={`tel:${number}`}
            className="hidden text-2xl leading-[120%] font-bold lg:block"
          >
            {number}
          </ExternalLink>
        </div>

        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4">
          <span className="max-w-[100px] text-center text-sm font-bold lg:text-lg">
            1 батальйон
          </span>
          <Image
            src={image?.src}
            alt={image?.alt}
            width={67}
            height={75}
            className="object-cover"
          />
          <span className="max-w-[100px] text-center text-sm font-bold lg:text-right lg:text-lg">
            Територіальної оборони
          </span>
        </div>

        <div className="mr-5 hidden lg:block">
          <Button
            variant="primary"
            onClick={onClick}
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
