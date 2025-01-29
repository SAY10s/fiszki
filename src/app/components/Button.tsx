"use client";
import { handleQuestionResponse } from "@/actions";
import { ResponseType } from "@prisma/client";
import React from "react";

type Question = {
  text: string;
  responses: { type: string }[];
  id: number;
};

type ButtonProps = {
  children: React.ReactNode;
  questionId: number;
  responseType: ResponseType;
  borderColor: "green" | "slate" | "red";
  setCurrentQuestion: (selectedQuestion: Question) => void;
  setQuestions: (
    questions: { text: string; responses: { type: string }[]; id: number }[]
  ) => void;
  questions: { text: string; responses: { type: string }[]; id: number }[];
};

const Button: React.FC<ButtonProps> = ({
  children,
  questionId,
  responseType,
  borderColor,
  setCurrentQuestion,
  questions,
  setQuestions,
}) => {
  return (
    <button
      className={`p-1 border-${borderColor}-400 border-2 m-1 w-20 rounded-lg`}
      onClick={() => {
        handleQuestionResponse(questionId, responseType);
        const selectedQuestion =
          questions[Math.floor(Math.random() * questions.length)];
        setCurrentQuestion(selectedQuestion);
        setQuestions((prevQuestions) => {
          return prevQuestions.map((question) => {
            if (question.id === questionId) {
              return {
                ...question,
                responses: [...question.responses, { type: responseType }],
              };
            }
            return question;
          });
        });
      }}
    >
      {children}
    </button>
  );
};

export default Button;
