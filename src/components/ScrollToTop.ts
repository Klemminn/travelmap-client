import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

type ScrollToTopProps = {
  elementId: string;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ elementId }) => {
  const history = useHistory();
  useEffect(() => {
    const removeListener = history.listen(() => {
      document.getElementById(elementId)?.scrollTo(0, 0);
    });
    return () => {
      removeListener();
    };
  }, []);

  return null;
};

export default ScrollToTop;
