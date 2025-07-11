import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { Button } from '@/components/Button';
import { QR_CARD_TEST_ID } from '@/lib/testIds';

import { BasicCard } from '../BasicCard';
import { QRcardProps } from './types';

const QRcard = ({ imageUrl, buttonText, link, className }: QRcardProps) => {
  return (
    <div
      className={twMerge('mx-auto max-h-[560px] max-w-[628px]', className)}
      data-testid={QR_CARD_TEST_ID}
    >
      <BasicCard gradientPosition="left" className={'p-10'}>
        <div className="mx-auto flex h-full w-full max-w-[328px] flex-col items-center justify-center gap-10">
          <div className="rounded-default relative hidden aspect-square max-h-[340px] w-full border-[1px] border-[#3D3D3D] bg-white md:block">
            <Image
              src={imageUrl}
              alt="QR code"
              priority={true}
              width={328}
              height={328}
              className="object-contain"
            />
          </div>
          <a href={link} className="w-full">
            <Button variant="secondary">{buttonText}</Button>
          </a>
        </div>
      </BasicCard>
    </div>
  );
};

export default QRcard;
