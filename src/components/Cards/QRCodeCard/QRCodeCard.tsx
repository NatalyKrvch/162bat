import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/Button';
import { ExternalLink } from '@/components/Links/ExternalLink';
import { QR_CARD_TEST_ID } from '@/lib/testIds';

import { BasicCard } from '../BasicCard';
import type { QRCodeCardProps } from './types';

const QRCodeCard = ({
  imageUrl,
  buttonText,
  link,
  className,
}: QRCodeCardProps) => {
  return (
    <div
      className={twMerge('mx-auto max-h-[560px] max-w-[628px]', className)}
      data-testid={QR_CARD_TEST_ID}
    >
      <BasicCard gradientPosition="left" className="p-10">
        <div className="mx-auto flex h-full w-full max-w-[328px] flex-col items-center justify-center gap-10">
          <div className="rounded-default relative hidden aspect-square max-h-[340px] w-full border border-(--color-grey) bg-white md:block">
            <Image
              src={imageUrl}
              alt={`QR-код для пожертви на підтримку батальйону через ${buttonText}`}
              width={328}
              height={328}
              className="object-contain"
            />
          </div>
          <ExternalLink href={link} className="w-full">
            <Button variant="secondary">{buttonText}</Button>
          </ExternalLink>
        </div>
      </BasicCard>
    </div>
  );
};

export default QRCodeCard;
