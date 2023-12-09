import React from "react";
// import PropTypes from "prop-types";

function Input({ size = "small", label = "input", ...props }) {
  return (
    <>
      <input
        type="text"
        placeholder={label}
        className={`${
          size === "small"
            ? "p-4 w-[200px] h-[20px] "
            : size === "middle"
            ? "p-4 w-[400px] h-[20px]"
            : " p-4 w-[400px] h-[20px]"
        }`}
      />
    </>
  );
}

export default Input;
