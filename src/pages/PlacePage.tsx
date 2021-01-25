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
import { PageService } from 'services';
import { PlacePage as PlacePageType } from 'types';
import styled from 'styled-components';

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlacePage: React.FC = () => {
  const slug = useParams<{ slug: string }>().slug;
  const [place, setPlace] = useState<PlacePageType | null>(null);
  useEffect(() => {
    getPlace();
  }, [slug]);

  const getPlace = async () => {
    const response = await PageService.getPlacePage(slug);
    setPlace(response);
  };

  return !place ? null : (
    <Containers.PageContainer image={place.headerImage}>
      <TitleBanner title={place.title}>
        <Breadcrumbs
          crumbs={[
            {
              label: 'Destinations',
              link: '/places',
            },
            {
              label: place.meta.parent?.title ?? '',
              link: `/regions/${place.meta.parent?.title ?? ''}`,
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
