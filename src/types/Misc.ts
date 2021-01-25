export type Image = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export type PageSection = {
  id: string;
  meta: {
    type: string;
  };
  title: string;
  text: string;
  image1Wide: Image | null;
  image1Tall: Image | null;
  image1Caption: string | null;
  image2Wide: Image | null;
  image2Tall: Image | null;
  image2Caption: string | null;
};
