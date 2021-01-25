import { Image, PageSection } from './Misc';
import { PlacePortrait } from './Places';

export type Region = {
  id: number;
  title: string;
  headerImage: Image;
  sections: PageSection[];
  images: Image[];
};

export type RegionPage = Region & {
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
  places: PlacePortrait[];
};
