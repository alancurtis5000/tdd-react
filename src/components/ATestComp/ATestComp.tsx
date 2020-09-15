// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line import/extensions
import ButtonJS from '../ButtonJS/ButtonJS.jsx';
import ButtonTSX from '../ButtonTSX/ButtonTSX';

const ATestComp = () => {
  const handleOnClick = (value: string) => {
    console.log('ATestComp handleOnClick: ', value);
  };

  return (
    <div className="ATestComp">
      <ButtonTSX
        title="TSX Button 1"
        handleOnClick={handleOnClick}
        value="My TSX Value 1"
      />
      <ButtonTSX
        title="TSX Button 2"
        handleOnClick={handleOnClick}
        value="My TSX Value 2"
      />
      <ButtonJS title="ButtonJS 1" />
      <ButtonJS
        title="ButtonJS 2"
        handleOnClick={handleOnClick}
        value="My JS Value 2"
      />
    </div>
  );
};

export default ATestComp;
