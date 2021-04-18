import { Image, PageSection } from './Misc';

export type Service = 'coffee' | 'food' | 'toilet';

export type Place = {
  id: number;
  title: string;
  headerImage: Image;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  tags: string[];
  sections: PageSection[];
  images: Image[];
  notes: string | null;
  services: Service[];
  pricing: 'Free*' | 'Free' | '$' | '$$' | '$$$' | '$$$$';
  pricingNotes: string | null;
};

export type PlacePortrait = {
  id: number;
  address: string;
  portraitImage: Image;
  title: string;
  meta: {
    slug: string;
  };
};

export type PlacePage = Place & {
  meta: {
    type: string;
    detailUrl: string;
    htmlUrl: string;
    slug: string;
    showInMenus: boolean;
    seoTitle: string;
    searchDescription: string;
    firstPublishedAt: string;
    parent?: {
      title: string;
    };
  };
};
