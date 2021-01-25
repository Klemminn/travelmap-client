import React from 'react';
import { LazyImage as ReactLazyImage } from 'react-lazy-images';
import styled from 'styled-components';

import * as Text from './Text';

type ImageProps = {
  src: string;
  alt?: string;
  size?: number;
  width?: string;
  lazy?: boolean;
};

export const Image: React.FC<ImageProps> = ({ src, lazy, ...rest }) =>
  !lazy ? (
    <img src={src} alt={rest.alt} {...rest} />
  ) : (
    <ReactLazyImage
      placeholder={({ ref }: { ref?: any }) => <div ref={ref} />}
      src={src}
      actual={({ imageProps }: { imageProps?: any }) => (
        <img alt={imageProps.alt} {...rest} {...imageProps} />
      )}
    />
  );

const CaptionedImageContainer = styled.div``;

export const FullWidthImage = styled(Image)`
  width: 100%;
`;

const ImageCaption = styled(Text.Caption)`
  margin-top: 0.5rem;
`;

type CaptionedImageProps = ImageProps & {
  caption: string;
  alt?: string;
};

export const CaptionedImage: React.FC<CaptionedImageProps> = ({
  src,
  caption,
  alt,
}) => (
  <CaptionedImageContainer>
    <FullWidthImage src={src} alt={alt ?? caption} />
    <ImageCaption>{caption}</ImageCaption>
  </CaptionedImageContainer>
);
