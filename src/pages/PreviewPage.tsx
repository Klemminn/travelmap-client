import React, { useEffect } from 'react';
import querystring from 'querystring';
import { useHistory } from 'react-router-dom';

import { PreviewParams } from 'types';

const PreviewPage: React.FC = () => {
  const params = querystring.parse(
    window.location.search.replace(/^\?/, ''),
  ) as PreviewParams;
  const history = useHistory();

  useEffect(() => {
    handleParams();
  }, []);

  const handleParams = async () => {
    // const data = await PageService.getPreviewData(params);
    if (params.content_type === 'pages.placepage') {
      history.push(`/placePreview/${params.token}?`);
    } else if (params.content_type === 'pages.experiencepage') {
      history.push(`/experiencePreview/${params.token}?`);
    } else if (params.content_type === 'pages.blogpage') {
      history.push(`/blogPreview/${params.token}?`);
    }
  };

  return null;
};

export default PreviewPage;
