import connector from './connector';

import { ExperiencePage, PlacePage, RegionPage } from 'types';

export const getPlaces = async (regionPageId: string): Promise<PlacePage[]> => {
  const { data } = await connector.get(
    `/places/?type=pages.PlacePage&fields=portrait_image,address&child_of=${regionPageId}`,
  );
  return data.items;
};

export const getPlacePage = async (slug: string): Promise<PlacePage> => {
  const { data } = await connector.get(`/places/${slug}/`);
  return data;
};

export const getExperiencePage = async (
  slug: string,
): Promise<ExperiencePage> => {
  const { data } = await connector.get(`/experiences/${slug}/`);
  return data;
};

export const getRegionPage = async (slug: string): Promise<RegionPage> => {
  const { data } = await connector.get(`/regions/${slug}/`);
  const places = await getPlaces(data.id);
  return { ...data, places };
};
