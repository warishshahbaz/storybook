// import Input from "./input";
import React from "react";
import Input from "./input";
export default {
  title: "Example/input/Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="small" />;
export const Medium = () => <Input size="medium" placeholder="medium" />;
export const Large = () => <Input size="large" placeholder="large" />;
