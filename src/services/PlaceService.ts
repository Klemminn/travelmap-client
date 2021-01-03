import connector from './connector';

import { PlacePage } from 'types';

export const getPlacePage = async (slug: string): Promise<PlacePage> => {
  const { data } = await connector.get(`/places/pages/${slug}/`);
  return data;
};
