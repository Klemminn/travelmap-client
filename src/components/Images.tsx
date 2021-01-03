import React from 'react';
import { LazyImage } from 'react-lazy-images';
import styled from 'styled-components';

import * as Text from './Text';

type ImageProps = {
  src: string;
  size?: number;
  width?: string;
};

export const Image: React.FC<ImageProps> = ({ src, ...rest }) => (
  <LazyImage
    placeholder={({ ref }: { ref?: any }) => <div ref={ref} />}
    src={src}
    actual={({ imageProps }: { imageProps?: any }) => (
      <img alt={imageProps.alt} {...rest} {...imageProps} />
    )}
  />
);

const CaptionedImageContainer = styled.div``;

type CaptionedImageProps = ImageProps & {
  caption: string;
};

const FullWidthImage = styled(Image)`
  width: 100%;
`;

const ImageCaption = styled(Text.Caption)`
  margin-top: 0.5rem;
`;

export const CaptionedImage: React.FC<CaptionedImageProps> = ({
  src,
  caption,
}) => (
  <CaptionedImageContainer>
    <FullWidthImage src={src} />
    <ImageCaption>{caption}</ImageCaption>
  </CaptionedImageContainer>
);
