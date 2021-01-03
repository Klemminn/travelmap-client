import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Breadcrumbs,
  Containers,
  Images,
  Layout,
  Section,
  Text,
  TitleBanner,
  TitleTwoLines,
} from 'components';
import { PlaceService } from 'services';
import { Place } from 'types';
import styled from 'styled-components';

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type PlacePageParams = {
  placeSlug: string;
};

const PlacePage: React.FC = () => {
  const { placeSlug }: PlacePageParams = useParams();
  const [place, setPlace] = useState<Place | null>(null);
  useEffect(() => {
    getPlace();
  }, []);

  const getPlace = async () => {
    const response = await PlaceService.getPlacePage(placeSlug);
    setPlace(response);
  };

  return !place ? null : (
    <Containers.PageContainer topImageSrc={place.header_image.url}>
      <TitleBanner title={place.title}>
        <Breadcrumbs
          crumbs={[
            {
              label: 'Destinations',
              link: '/places',
            },
            {
              label: place.region_name,
              link: `/regions/${place.region_name}`,
            },
            {
              label: place.title,
            },
          ]}
        />
      </TitleBanner>
      <Layout.Row>
        <Layout.Col md={9}>
          <Text.Description>{place.description}</Text.Description>
          {place.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </Layout.Col>
        <Layout.Col md={3}>
          <SideContainer>
            <Images.Image src="/assets/iceland-silhouette.png" width="100%" />
            <Text.Text>Address: {place.address}</Text.Text>
            <Text.Text>
              Coordinates: {place.latitude} - {place.longitude}
            </Text.Text>
            <TitleTwoLines>Services</TitleTwoLines>
            <TitleTwoLines>Opening hours</TitleTwoLines>
            <TitleTwoLines>Admission fee</TitleTwoLines>
            <TitleTwoLines>Share</TitleTwoLines>
            <TitleTwoLines>Categories</TitleTwoLines>
          </SideContainer>
        </Layout.Col>
      </Layout.Row>
    </Containers.PageContainer>
  );
};

export default PlacePage;
