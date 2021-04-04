import { Image, PageSection } from './Misc';

export type Blog = {
  id: number;
  title: string;
  headerImage: Image;
  sections: PageSection[];
  images: Image[];
};

export type BlogPage = Blog & {
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
