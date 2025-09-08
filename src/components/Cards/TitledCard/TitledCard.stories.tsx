import type { Meta, StoryObj } from '@storybook/nextjs';

import TitledCard from './TitledCard';

const mockTitledCardText = [
  {
    id: 'tc-1',
    text: '29 березня 2018 року батальйон був створений у складі 119-ї бригади, яка об’єднала 43 загони територіальної оборони Чернігівщини.',
  },
  {
    id: 'tc-2',
    text: 'Ще в мирний час ми проводили регулярні навчання, щоб бути готовими до будь-яких викликів. В 2018 році проводились тактичні навчання “Північна фортеця - 2018”, які були організовані з використанням досвіду застосування військових частин територіальної оборони країн Балтії та скандинавських держав. У 2021 році понад 2 000 резервістів бригади, включно з нашими бійцями, взяли участь у масштабних навчаннях, готуючись до оборони регіону.',
  },
];

export default {
  component: TitledCard,
  title: 'TitledCard',
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj = {
  args: {
    title: 'Titled Card',
    description: 'This is a titled card component.',
  },
};

export const TitledCardWithGreenTitle: StoryObj = {
  args: {
    title: 'Titled Card',
    className: 'gap-3 sm:text-lg',
    titleColor: 'green',
    description: 'This is a titled card component.',
  },
};

export const TitledCardWithManyParagraph: StoryObj = {
  args: {
    title: 'Titled Card',
    className: 'gap-3 sm:text-lg',
    titleColor: 'green',
    description: mockTitledCardText,
  },
};
