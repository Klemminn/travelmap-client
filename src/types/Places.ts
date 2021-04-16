import { Image, PageSection } from './Misc';

export type Place = {
  id: number;
  title: string;
  headerImage: Image;
  description: string;
  address: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  latitude: number;
  longitude: number;
  tags: string[];
  sections: PageSection[];
  images: Image[];
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