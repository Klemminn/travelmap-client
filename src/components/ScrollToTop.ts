import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    const removeListener = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      removeListener();
    };
  }, []);

  return null;
};

export default ScrollToTop;
