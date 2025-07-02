export type TitleColor = 'default' | 'green';

export type TextNode = {
  id: string;
  text: string;
};

export interface TitledCardProps {
  title: string;
  description: string | TextNode[];
  titleColor?: TitleColor;
  className?: string;
}
