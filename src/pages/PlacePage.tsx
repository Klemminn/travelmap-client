import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {
  Breadcrumbs,
  Containers,
  Cost,
  Images,
  Layout,
  Section,
  Services,
  SocialLinks,
  Tags,
  Text,
  TitleBanner,
  TitleTwoLines,
} from 'components';
import { PageService } from 'services';
import { PlacePage as PlacePageType } from 'types';

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlacePage: React.FC = () => {
  const { slug, token } = useParams<{ slug?: string; token?: string }>();
  const [place, setPlace] = useState<PlacePageType | null>(null);
  useEffect(() => {
    getPlace();
  }, [slug, token]);

  const getPlace = async () => {
    const response = await (slug
      ? PageService.getPlacePage(slug)
      : PageService.getPreviewData({
          token: token!,
          content_type: 'pages.placepage',
        }));
    setPlace(response);
  };

  return !place ? null : (
    <Containers.PageContainer headerImage={place.headerImage}>
      <TitleBanner title={place.title}>
        <Breadcrumbs
          crumbs={[
            {
              label: 'Destinations',
              link: '/places',
            },
            {
              label: place.meta.parent?.title ?? '',
              link: `/regions/${
                place.meta.parent?.title.toLocaleLowerCase() ?? ''
              }`,
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
            <Services services={place.services} />
            <TitleTwoLines>Notes</TitleTwoLines>
            {place.notes}
            <TitleTwoLines>Pricing</TitleTwoLines>
            <Cost cost={place.cost} />
            <TitleTwoLines>Share</TitleTwoLines>
            <SocialLinks
              facebook={place.facebookUrl}
              twitter={place.twitterUrl}
              instagram={place.instagramUrl}
            />
            <TitleTwoLines>Categories</TitleTwoLines>
            <Tags tags={place.tags} />
          </SideContainer>
        </Layout.Col>
      </Layout.Row>
    </Containers.PageContainer>
  );
};

export default PlacePage;
