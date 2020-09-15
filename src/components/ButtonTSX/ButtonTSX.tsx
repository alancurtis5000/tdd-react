// eslint-disable-next-line
import React from 'react';

// TS Question: cant find a way of providing default props if none are provided.

/* could also use interface */
interface ButtonTSXProps {
  title: string;
  handleOnClick: (value: string) => void;
  value: string;
}

const ButtonTSX = ({ title, handleOnClick, value }: ButtonTSXProps) => {
  const myHandleOnClick = () => {
    handleOnClick(value);
  };

  return (
    <button
      type="button"
      className="Button ButtonTSX"
      onClick={myHandleOnClick}
    >
      <div>{title}</div>
    </button>
  );
};

export default ButtonTSX;
