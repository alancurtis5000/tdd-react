import React from 'react';
import PropTypes from 'prop-types';

const ButtonJS = (props) => {
  const { title, handleOnClick, value } = props;

  const myHandleOnClick = () => {
    handleOnClick(value);
  };

  return (
    <button type="button" className="Button ButtonJS" onClick={myHandleOnClick}>
      <div>{title}</div>
    </button>
  );
};

ButtonJS.defaultProps = {
  handleOnClick: () => console.log('default handleOnClick'),
  value: 'default value',
};

ButtonJS.propTypes = {
  title: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
  value: PropTypes.string,
};

export default ButtonJS;
