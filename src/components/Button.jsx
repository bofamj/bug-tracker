import React from "react";

const Button = ({ cleckHandeler, name }) => {
  return (
    <button
      className="btn btn--large btn--blue"
      onClick={() => cleckHandeler()}
    >
      {name}
    </button>
  );
};

export default Button;
