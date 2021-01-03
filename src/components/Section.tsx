import React from 'react';
import styled from 'styled-components';
import { Colors } from 'styles';

import { PlaceSection } from 'types';

import * as Images from './Images';
import * as Text from './Text';

const SectionContainer = styled.div``;

const Title = styled(Text.Title)`
  margin: 2.5rem 0;
  color: ${Colors.BlueDark};
`;

const InformationText = styled(Text.Information)`
  margin: 1rem 0;
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
  section: PlaceSection;
};

const CaptionedImages: React.FC<SectionProps> = ({ section }) => {
  const { image_1, image_1_caption, image_2, image_2_caption } = section;
  const hasNoImage = !image_1 && !image_2;
  const hasTwoImages = image_1 && image_2;
  if (hasNoImage) return null;
  if (!hasTwoImages)
    return (
      <Images.CaptionedImage
        caption={image_1_caption! ?? image_2_caption!}
        src={image_1?.url! ?? image_2?.url!}
      />
    );
  return (
    <DoubleImageContainer>
      <Images.CaptionedImage caption={image_1_caption!} src={image_1?.url!} />
      <Images.CaptionedImage caption={image_2_caption!} src={image_2?.url!} />
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
