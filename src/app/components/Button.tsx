"use client";
import { handleKnow } from "@/actions";
import React from "react";

type ButtonProps = {
  // onClick: () => void;
  children: React.ReactNode;
  questionId: number;
};

const Button: React.FC<ButtonProps> = ({ children, questionId }) => {
  return (
    <button
      className="p-1 border-green-400 border-2 m-1 w-20 rounded-lg"
      onClick={() => {
        handleKnow(questionId);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
