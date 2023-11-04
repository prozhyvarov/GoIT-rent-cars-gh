import { useState } from 'react';
import { LoadMoreBtn } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';


export const LoadMoreButton = ({ onClick = null }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    console.log(isLoading);
    setIsLoading(false);
  };

  return (
    <LoadMoreBtn
      type="button"
      className={LoadMoreButton}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load more'}
    </LoadMoreBtn>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};