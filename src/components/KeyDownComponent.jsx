import { useEffect } from 'react';

const KeydownComponent = ({ downloadLines }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        downloadLines();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [downloadLines]);

  return null;
};

export default KeydownComponent;
