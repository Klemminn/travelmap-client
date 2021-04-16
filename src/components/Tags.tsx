import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  a {
    margin: 0 1rem;
  }
`;

type TagsProps = {
  tags: string[];
};

const Tag = styled.a`
  color: inherit !important;
`;

const Tags: React.FC<TagsProps> = ({ tags }) => (
  <Container>
    {tags.map((tag, idx) => (
      <Tag href={tag} key={idx}>
        {tag}
      </Tag>
    ))}
  </Container>
);

export default Tags;
