import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs, Containers, Section, TitleBanner } from 'components';
import { PageService } from 'services';
import { ExperiencePage as ExperiencePageType } from 'types';

const ExperiencePage: React.FC = () => {
  const { slug, token } = useParams<{ slug?: string; token?: string }>();
  const [experience, setExperience] = useState<ExperiencePageType | null>(null);
  useEffect(() => {
    getExperience();
  }, [slug, token]);

  const getExperience = async () => {
    const response = await (slug
      ? PageService.getExperiencePage(slug)
      : PageService.getPreviewData({
          token: token!,
          content_type: 'pages.experiencepage',
        }));
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
