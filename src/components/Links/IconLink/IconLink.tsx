import ExternalLink from '@components/Links/ExternalLink/ExternalLink';
import { type IconLinkProps } from '@components/Links/IconLink/types';
import Image from 'next/image';

const IconLink = ({ icon, link }: IconLinkProps) => {
  return (
    <ExternalLink href={link}>
      <Image
        src={icon}
        alt="Написати рекрутеру"
        height={50}
        width={50}
        className="h-10 w-10"
      />
    </ExternalLink>
  );
};

export default IconLink;
