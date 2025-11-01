export interface HistorySection {
  title: string;
  text: string[];
  image?: string;
}

export interface HistoryPageDataType {
  title: string;
  intro: string;
  section1: HistorySection;
  section2: HistorySection;
  section3: HistorySection;
  cta: string;
}

export type BattleJourneyItemType =
  | { type: 'image'; src?: string }
  | { type: 'card'; data: HistorySection };
