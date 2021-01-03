export type PlaceImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export type PlaceSection = {
  id: string;
  meta: {
    type: string;
  };
  title: string;
  text: string;
  image_1: PlaceImage | null;
  image_1_caption: string | null;
  image_2: PlaceImage | null;
  image_2_caption: string | null;
};

export type Place = {
  id: number;
  title: string;
  header_image: PlaceImage;
  region_name: string;
  description: string;
  address: string;
  facebook_url: string;
  twitter_page: string;
  latitude: number;
  longitude: number;
  tags: string[];
  sections: PlaceSection[];
  images: PlaceImage[];
};

export type PlacePage = Place & {
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
    show_in_menus: boolean;
    seo_title: string;
    search_description: string;
    first_published_at: string;
    parent: null;
  };
};
