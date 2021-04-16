import { Image, PageSection } from './Misc';

export type Service = 'coffee' | 'food' | 'toilet';

export type Place = {
  id: number;
  title: string;
  headerImage: Image;
  description: string;
  address: string;
  facebookUrl: string | null;
  twitterUrl: string | null;
  instagramUrl: string | null;
  latitude: number;
  longitude: number;
  tags: string[];
  sections: PageSection[];
  images: Image[];
  notes: string | null;
  services: Service[];
  cost: '0' | '1' | '2' | '3' | '4';
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
