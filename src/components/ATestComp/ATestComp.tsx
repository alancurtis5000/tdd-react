// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line import/extensions
import ButtonJS from '../ButtonJS/ButtonJS.jsx';

const handleOnClick = (value: string) => {
  console.log('ATestComp handleOnClick: ', value);
};

function ATestComp() {
  return (
    <div className="ATestComp">
      <ButtonJS title="One" />
      <ButtonJS title="Cheese" handleOnClick={handleOnClick} value="My Value" />
    </div>
  );
}

export default ATestComp;
