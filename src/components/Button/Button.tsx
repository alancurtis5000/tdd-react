// eslint-disable-next-line
import React from 'react'; // we need this to make JSX compile

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => (
  <button type="button" className="Button" onClick={() => console.log('hello')}>
    <div>{title}</div>
  </button>
);

export default Button;
