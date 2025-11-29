import historyPageData from '@data/historyPageData.json';
import { type Metadata } from 'next';
import Image from 'next/image';

import {
  BasicCard,
  Carousel,
  Container,
  SectionTitle,
  TitledCard,
} from '@/components';

import { type BattleJourneyItemType, type HistoryPageDataType } from './types';

export const metadata: Metadata = {
  title:
    'Історія батальйону — 1 батальйон територіальної оборони 119 окремої бригади територіальної оборони',
  description:
    'Історія створення, бойовий шлях та розвиток 1 батальйону територіальної оборони 119 окремої бригади територіальної оборони.',
};

const HistoryPage = () => {
  const dataToShow: HistoryPageDataType = historyPageData;
  const beginningSectionData = dataToShow.section1;
  const totalWarSectionData = dataToShow.section2;
  const totalWarSectionPhoto = dataToShow.section2.image;
  const todaySectionData = dataToShow.section3;
  const todaySectionPhoto = dataToShow.section3.image;
  const callToActionText = dataToShow.cta;
  const battleJourneyGridItems: BattleJourneyItemType[] = [
    { type: 'image', src: totalWarSectionPhoto },
    { type: 'card', data: totalWarSectionData },
    { type: 'card', data: todaySectionData },
    { type: 'image', src: todaySectionPhoto },
  ];
  const galleryImages = [
    '/images/history/gallery/history-1.webp',
    '/images/history/gallery/history-2.webp',
    '/images/history/gallery/history-3.webp',
    '/images/history/gallery/history-4.webp',
    '/images/history/gallery/history-5.webp',
    '/images/history/gallery/history-6.webp',
    '/images/history/gallery/history-7.webp',
    '/images/history/gallery/history-8.webp',
    '/images/history/gallery/history-9.webp',
  ];

  return (
    <Container>
      <div className="mt-8 mb-6 flex flex-col lg:mb-10 lg:justify-between xl:mt-20 xl:mb-20">
        <SectionTitle className="xl:text-14 mb-8 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%] xl:max-w-[1000px]">
          {dataToShow.title}
        </SectionTitle>
        <p className="text-lg leading-[130%] lg:text-xl">{dataToShow.intro}</p>
      </div>

      <div className="mx-auto max-w-[450px] sm:max-w-[600px] lg:max-w-[840px]">
        <div>
          <BasicCard
            hasBorder={false}
            className="mb-6 px-4 py-5 lg:px-10 lg:py-8"
          >
            <TitledCard
              titleColor="green"
              title={beginningSectionData.title}
              description={beginningSectionData.text}
            />
          </BasicCard>
        </div>

        <div className="mx-auto grid max-w-[840px] grid-cols-1 gap-6 sm:grid-cols-2">
          {battleJourneyGridItems.map((item, index) => (
            <BasicCard hasBorder={false} key={index}>
              {item.type === 'image' ? (
                item.src && (
                  <div className="relative h-[330px] w-full">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="rounded-inner-card object-cover"
                    />
                  </div>
                )
              ) : item.type === 'card' && item.data ? (
                <TitledCard
                  titleColor="green"
                  title={item.data.title}
                  description={item.data.text}
                  className="px-4 py-5 lg:px-8 lg:py-10"
                />
              ) : null}
            </BasicCard>
          ))}
        </div>

        <BasicCard
          className="bg-green mt-6 mb-6 px-10 py-8 text-center text-lg font-bold whitespace-pre-line lg:text-2xl"
          hasBorder={false}
        >
          {callToActionText}
        </BasicCard>
      </div>

      <div className="mt-12 mb-3 flex flex-col lg:mt-20 lg:mb-8 lg:justify-between xl:mt-30 xl:mb-10">
        <SectionTitle className="xl:text-14 mb-8 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%] xl:max-w-[1000px]">
          Галерея
        </SectionTitle>
      </div>

      <div className="lg-mb-20 mb-10">
        <Carousel perView={3}>
          {galleryImages.map(item => (
            <BasicCard key={item} hasBorder={false}>
              <Image src={item} alt={'photo'} width={412} height={312} />
            </BasicCard>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default HistoryPage;
