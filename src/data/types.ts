export type ArchiveSection = 'work' | 'note' | 'learning' | 'place' | 'career';

export type ArchiveItem = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly href: string;
  readonly kind: string;
  readonly date: string;
  readonly dateTime: string;
  readonly section: ArchiveSection;
  readonly featured: boolean;
};

export type TextItem = {
  readonly title: string;
  readonly body: string;
};

export type GardenPath = TextItem & {
  readonly href: string;
  readonly count: string;
};

export type NowGroup = {
  readonly title: string;
  readonly items: readonly string[];
};
