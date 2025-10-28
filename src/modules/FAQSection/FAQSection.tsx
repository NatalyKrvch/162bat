import { Button, InternalLink, SectionTitle } from '@/components';
import FAQCard from '@/components/Cards/FAQCard/FAQCard';
import { FAQSectionProps } from './types';

const FAQSection = ({ data }: FAQSectionProps) => {
  if (!data) {
    return null;
  }

  const { title, readMoreText, readMoreLink, items } = data;

  const MAX_ITEMS_TO_SHOW_ON_HOMEPAGE = 3;

  const faqItemsToShow = items.slice(0, MAX_ITEMS_TO_SHOW_ON_HOMEPAGE);

  return (
    <>
      <div className="flex flex-col items-start lg:mb-10 lg:flex-row lg:items-center lg:justify-between xl:mb-10">
        <SectionTitle className="xl:text-14 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
          {title}
        </SectionTitle>

        <InternalLink href={readMoreLink}>
          <Button
            variant="link"
            className="text-lg leading-none font-bold tracking-normal uppercase lg:text-xl lg:leading-5"
          >
            {readMoreText}
          </Button>
        </InternalLink>
      </div>
  

      {faqItemsToShow && faqItemsToShow.map((item, index) => (
        <FAQCard key={index} question={item.question} answer={item.answer} />
      ))}
    </>
  );
};

export default FAQSection;
