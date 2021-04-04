import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs, Containers, Section, TitleBanner } from 'components';
import { PageService } from 'services';
import { ExperiencePage as ExperiencePageType } from 'types';

const ExperiencePage: React.FC = () => {
  const slug = useParams<{ slug: string }>().slug;
  const [experience, setExperience] = useState<ExperiencePageType | null>(null);
  useEffect(() => {
    getPlace();
  }, []);

  const getPlace = async () => {
    const response = await PageService.getExperiencePage(slug);
    setExperience(response);
  };

  return !experience ? null : (
    <Containers.PageContainer headerImage={experience.headerImage}>
      <TitleBanner title={experience.title}>
        <Breadcrumbs
          crumbs={[
            {
              label: 'Experience',
              link: '/experience',
            },
            {
              label: experience.title,
            },
          ]}
        />
      </TitleBanner>
      {experience.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </Containers.PageContainer>
  );
};

export default ExperiencePage;
