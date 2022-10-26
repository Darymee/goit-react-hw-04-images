import PropTypes from 'prop-types';

import { BtnWrap, BtnLoadMore } from './Button.styled.js';

export const Button = ({ onLoadMore }) => {
  return (
    <BtnWrap>
      <BtnLoadMore type="button" onClick={onLoadMore}>
        Load more
      </BtnLoadMore>
    </BtnWrap>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
