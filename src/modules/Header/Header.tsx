import Image from 'next/image';
import { RiMenu2Fill } from 'react-icons/ri';

import {
  Button,
  Container,
  ExternalLink,
  IconWithTextButton,
} from '@/components';
import { HEADER_TEST_ID } from '@/lib/testIds';

import type { HeaderProps } from './types';

const Header = ({ data, onClick }: HeaderProps) => {
  if (!data) return null;

  const { image, number, button, iconButton } = data;

  return (
    <header
      data-testid={HEADER_TEST_ID}
      className="sticky top-0 left-0 z-20 h-(--height-header-mobile) w-screen bg-(--color-bg-primary) lg:h-(--height-header)"
    >
      <Container className="relative flex h-full w-full items-center justify-between py-4 lg:py-8">
        <div className="z-10 flex items-center justify-center gap-4 xl:gap-15.5">
          <IconWithTextButton
            icon={<RiMenu2Fill className="h-9 w-9" />}
            text={iconButton?.title}
          />
          <ExternalLink
            href={`tel:${number}`}
            className="hidden text-2xl leading-[120%] font-bold lg:block"
          >
            {number}
          </ExternalLink>
        </div>
        <div className="absolute top-1/2 left-1/2 h-20 -translate-1/2">
          <Image
            src={image?.src}
            alt={image?.alt}
            width={67}
            height={80}
            className="h-full object-cover"
          />
        </div>
        <div className="hidden lg:block">
          <Button variant="primary" onClick={onClick}>
            {button.title}
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
