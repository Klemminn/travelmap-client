import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs, Containers, Section, TitleBanner } from 'components';
import { PageService } from 'services';
import { BlogPage as BlogPageType } from 'types';

const BlogPage: React.FC = () => {
  const { slug, token } = useParams<{ slug?: string; token?: string }>();
  const [blog, setBlog] = useState<BlogPageType | null>(null);
  useEffect(() => {
    getBlog();
  }, [slug, token]);

  const getBlog = async () => {
    const response = await (slug
      ? PageService.getBlogPage(slug)
      : PageService.getPreviewData({
          token: token!,
          content_type: 'pages.blogpage',
        }));
    setBlog(response);
  };

  return !blog ? null : (
    <Containers.PageContainer headerImage={blog.headerImage}>
      <TitleBanner title={blog.title}>
        <Breadcrumbs
          crumbs={[
            {
              label: 'Blogs',
              link: '/blog',
            },
            {
              label: blog.title,
            },
          ]}
        />
      </TitleBanner>
      {blog.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </Containers.PageContainer>
  );
};

export default BlogPage;
