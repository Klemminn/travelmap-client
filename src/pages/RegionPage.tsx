import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  Breadcrumbs,
  Containers,
  PortraitHorizontalList,
  Section,
  TitleBanner,
} from 'components';
import { PageService } from 'services';
import { RegionPage as RegionPageType } from 'types';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.3rem;
  }
`;

const ExperiencePage: React.FC = () => {
  const slug = useParams<{ slug: string }>().slug;
  const [region, setRegion] = useState<RegionPageType | null>(null);
  useEffect(() => {
    getRegion();
  }, [slug]);

  const getRegion = async () => {
    const response = await PageService.getRegionPage(slug);
    setRegion(response);
  };

  return !region ? null : (
    <Containers.PageContainer headerImage={region.headerImage}>
      <TitleBanner title={region.title}>
        <Breadcrumbs
          crumbs={[
            {
              label: 'Regions',
              link: '/regions',
            },
            {
              label: region.title,
            },
          ]}
        />
      </TitleBanner>
      <PortraitHorizontalList
        items={region.places.map((place) => ({
          title: place.title,
          subtitle: (
            <AddressContainer>
              <FaMapMarkerAlt />
              {place.address}
            </AddressContainer>
          ),
          image: place.portraitImage,
          route: `/places/${place.meta.slug}`,
        }))}
        title={`Explore the ${region.title}`}
      />
      {region.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </Containers.PageContainer>
  );
};

export default ExperiencePage;
