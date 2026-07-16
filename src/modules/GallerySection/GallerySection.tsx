import { type GallerySectionProps } from '@modules/GallerySection/types';
import Image from 'next/image';

import { BasicCard, Carousel } from '@/components';

const GallerySection = ({ galleryImages }: GallerySectionProps) => {
  return (
    <Carousel perView={3}>
      {galleryImages.map(item => (
        <BasicCard key={item} hasBorder={false}>
          <Image src={item} alt={'photo'} width={412} height={312} />
        </BasicCard>
      ))}
    </Carousel>
  );
};

export default GallerySection;
