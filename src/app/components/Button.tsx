"use client";
import React from "react";

import { handleKnow } from "@/actions";

// type ButtonProps = {
//   onClick: () => void;
// };

const Button: React.FC = () => {
  return <button onClick={handleKnow}>Click Me</button>;
};

export default Button;
