import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';

import { PageSection } from 'types';

import * as Images from './Images';
import * as Text from './Text';

const SectionContainer = styled.div``;

const Title = styled(Text.Title)`
  margin: 2.5rem 0;
  color: ${Colors.BlueDark};
`;

const InformationText = styled(Text.Information)`
  margin: 1rem 0 1rem 4rem;
  color: ${Colors.BlackText};
`;

const DoubleImageContainer = styled.div`
  display: flex;
  > * {
    flex: 1;
    &:first-child {
      margin-right: 1em;
    }
  }
`;

type SectionProps = {
  section: PageSection;
};

const CaptionedImages: React.FC<SectionProps> = ({ section }) => {
  const {
    image1Tall,
    image1Wide,
    image1Caption,
    image2Tall,
    image2Wide,
    image2Caption,
  } = section;
  const hasNoImage = !image1Tall && !image2Tall;
  const hasTwoImages = image1Tall && image2Tall;
  if (hasNoImage) return null;
  if (!hasTwoImages)
    return (
      <Images.CaptionedImage
        caption={image1Caption! ?? image2Caption!}
        alt={image1Wide?.alt! ?? image2Wide?.alt!}
        src={image1Wide?.url! ?? image2Wide?.url!}
      />
    );
  return (
    <DoubleImageContainer>
      <Images.CaptionedImage
        caption={image1Caption!}
        alt={image1Tall?.alt!}
        src={image1Tall?.url!}
      />
      <Images.CaptionedImage
        caption={image2Caption!}
        alt={image2Tall?.alt!}
        src={image2Tall?.url!}
      />
    </DoubleImageContainer>
  );
};

const Section: React.FC<SectionProps> = ({ section }) => (
  <SectionContainer>
    <Title>{section.title}</Title>
    <InformationText>{section.text}</InformationText>
    <CaptionedImages section={section} />
  </SectionContainer>
);

export default Section;
