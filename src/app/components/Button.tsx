"use client";
import { handleQuestionResponse } from "@/actions";
import { ResponseType } from "@prisma/client";
import React from "react";

type ButtonProps = {
  // onClick: () => void;
  children: React.ReactNode;
  questionId: number;
  responseType: ResponseType;
  borderColor: "green" | "slate" | " red";
};

const Button: React.FC<ButtonProps> = ({
  children,
  questionId,
  responseType,
  borderColor,
}) => {
  return (
    <button
      className={`p-1 border-${borderColor}-400 border-2 m-1 w-20 rounded-lg`}
      onClick={() => {
        handleQuestionResponse(questionId, responseType);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
