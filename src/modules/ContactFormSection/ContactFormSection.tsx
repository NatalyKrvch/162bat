import { BasicCard, SectionTitle } from '@/components';
import ContactForm from '@/components/Forms/ContactForm/ContactForm';
import contactFormData from '@/data/contactFormData.json';

import { type ContactFormSectionProps } from './types';

const ContactFormSection = ({ data }: ContactFormSectionProps) => {
  if (!data) {
    return null;
  }

  const { title, subtitle } = data;

  return (
    <>
      <BasicCard hasBorder={false} className="p-10">
        <div className="mb-15 flex flex-col items-center">
          <SectionTitle className="xl:text-14 mb-5 w-fit text-left text-2xl leading-[120%] tracking-normal lg:text-5xl lg:leading-[110%]">
            {title}
          </SectionTitle>
          <p className="text-base leading-[130%] tracking-normal md:text-center lg:text-2xl lg:leading-[120%]">
            {subtitle}
          </p>
        </div>

        {<ContactForm data={contactFormData} />}
      </BasicCard>
    </>
  );
};

export default ContactFormSection;
