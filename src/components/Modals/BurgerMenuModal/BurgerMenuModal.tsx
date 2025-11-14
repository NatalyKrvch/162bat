'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { usePathname } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import { RiMenu2Fill } from 'react-icons/ri';
import { twMerge } from 'tailwind-merge';

import { IconLink } from '@/components';
import { IconWithTextButton } from '@/components/Buttons/IconWithTextButton';
import { ExternalLink } from '@/components/Links/ExternalLink';
import { MenuItemLink } from '@/components/Links/MenuItemLink';
import { ModalWrapper } from '@/components/Modals/ModalWrapper';
import { Navigation } from '@/components/Navigation';

import type { BurgerMenuModalProps } from './types';

const BurgerMenuModal = ({
  buttonText,
  menu,
  contacts,
}: BurgerMenuModalProps) => {
  const pathname = usePathname();
  const messengers = Object.entries(contacts.messengers);

  return (
    <ModalWrapper
      trigger={
        <IconWithTextButton
          icon={<RiMenu2Fill className="h-9 w-9" />}
          text={buttonText}
          textClassName="hidden lg:block ml-1.75"
        />
      }
      className="flex h-screen w-screen flex-col lg:w-[660px]"
      animationStyle="fixed data-[state=open]:animate-header-menu-in data-[state=closed]:animate-header-menu-out"
    >
      <Dialog.Title className="sr-only">Меню</Dialog.Title>
      <Dialog.Description className="sr-only">Пункти меню</Dialog.Description>
      <div className="flex h-auto items-center justify-between px-4 py-7 lg:px-8 lg:py-9">
        <Dialog.Close asChild>
          <IconWithTextButton
            icon={<IoClose className="h-9 w-9" />}
            text="Закрити"
            textClassName="ml-2"
          />
        </Dialog.Close>
      </div>

      <div className="mt-8 flex h-full flex-col justify-start gap-6.75 lg:mt-0 lg:justify-center lg:gap-0">
        <Navigation>
          {menu.map(item => {
            const isActive = pathname === item.href;

            return (
              <li key={item.title} className="w-full">
                <Dialog.Close asChild>
                  <MenuItemLink
                    text={item.title}
                    href={item.href}
                    className={twMerge(
                      'flex justify-center text-2xl',
                      isActive
                        ? 'font-bold text-(--color-text-light-green)'
                        : 'text-white',
                    )}
                  />
                </Dialog.Close>
              </li>
            );
          })}
        </Navigation>

        <address className="flex w-full flex-col items-center p-2 text-2xl font-bold not-italic lg:p-14">
          <p className="pb-3 text-(--color-text-light-green)">Контакти</p>
          {contacts.phoneNumbers.map(phoneNumber => (
            <ExternalLink
              key={phoneNumber}
              href={`tel:${phoneNumber}`}
              className="pb-2"
            >
              {phoneNumber}
            </ExternalLink>
          ))}

          <div className="mt-4 flex gap-5">
            {messengers.map(([name, data]) => (
              <IconLink key={name} link={data.link} icon={data.icon} />
            ))}
          </div>
        </address>
      </div>
    </ModalWrapper>
  );
};

export default BurgerMenuModal;
