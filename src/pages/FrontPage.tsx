import { Containers, HeaderCarousel } from 'components';
import React, { useEffect, useState } from 'react';

import { PageService } from 'services';
import { FrontPage as FrontPageData } from 'types';

const FrontPage: React.FC = () => {
  const [data, setData] = useState<FrontPageData | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await PageService.getFrontPage();
    setData(response);
  };

  return !data ? null : (
    <Containers.PageContainer header={<HeaderCarousel items={data.pages} />} />
  );
};

export default FrontPage;
