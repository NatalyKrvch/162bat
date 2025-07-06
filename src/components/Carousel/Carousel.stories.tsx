import type { Meta, StoryObj } from '@storybook/react';

import { BasicCard } from '@/components/Cards/BasicCard';

import Carousel from './Carousel';

export default {
  component: Carousel,
  title: 'Carousel',
  tags: ['autodocs'],
} as Meta;

const slides2 = Array.from({ length: 5 }, (_, index) => (
  <div className="grid grid-rows-2 gap-6" key={index}>
    <BasicCard gradientPosition="left">Slide {index * 2 + 1}</BasicCard>
    <BasicCard gradientPosition="left">Slide {index * 2 + 2}</BasicCard>
  </div>
));

const slides3 = Array.from({ length: 5 }, (_, index) => (
  <div className="grid grid-cols-3 gap-6" key={index}>
    <BasicCard gradientPosition="left">Slide {index * 3 + 1}</BasicCard>
    <BasicCard gradientPosition="left">Slide {index * 3 + 2}</BasicCard>
    <BasicCard gradientPosition="left">Slide {index * 3 + 3}</BasicCard>
  </div>
));

const slides4 = Array.from({ length: 5 }, (_, index) => (
  <div className="grid grid-cols-2 gap-6" key={index}>
    <BasicCard gradientPosition="left">Slide {index * 4 + 1}</BasicCard>
    <BasicCard gradientPosition="left">Slide {index * 4 + 2}</BasicCard>
    <BasicCard gradientPosition="left">Slide {index * 4 + 3}</BasicCard>
    <BasicCard gradientPosition="left">Slide {index * 4 + 4}</BasicCard>
  </div>
));

export const TwoCardsPerSlide: StoryObj = {
  render: () => <Carousel>{slides2}</Carousel>,
};

export const ThreeCardsPerSlide: StoryObj = {
  render: () => <Carousel>{slides3}</Carousel>,
};

export const FourCardsPerSlide: StoryObj = {
  render: () => <Carousel>{slides4}</Carousel>,
};
