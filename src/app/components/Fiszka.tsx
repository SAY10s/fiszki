"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import { ResponseType } from "@prisma/client";

type FiszkaProps = {
  questions: { text: string; responses: { type: string }[]; id: number }[];
};

type Question = {
  text: string;
  responses: { type: string }[];
  id: number;
};

const Fiszka: React.FC<FiszkaProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const selectedQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(selectedQuestion);
  }, [questions]);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  let knowCount = 0;
  let dontKnowCount = 0;
  let skipCount = 0;

  currentQuestion.responses.forEach((r) => {
    if (r.type === "KNOW") knowCount++;
    if (r.type === "DONT_KNOW") dontKnowCount++;
    if (r.type === "SKIP") skipCount++;
  });

  return (
    <main className="flex flex-col items-center text-center">
      <div className="pt-12 pb-8">
        <h1 className="text-5xl">ALGEBRA</h1>
        <h1 className="text-2xl">Wszystkie pytania</h1>
      </div>
      <div className="flex flex-col max-w-xl w-full p-4">
        <div className=" text-center p-4 border-slate-200 border-2 rounded-lg ">
          <h2 className="text-3xl">{currentQuestion.text}</h2>
          <div className="flex justify-between pt-8">
            <div className="opacity-40">
              To pytanie pojawiło się już{" "}
              <span className="font-bold">
                {knowCount + skipCount + dontKnowCount}
              </span>{" "}
              razy
            </div>
            <div>
              <span className="text-green-400">{knowCount}</span>/
              <span className="text-slate-400">{skipCount}</span>/
              <span className="text-red-400">{dontKnowCount}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 text-3xl">
          <Button
            questionId={currentQuestion.id}
            responseType={ResponseType.KNOW}
            borderColor="green"
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
          >
            &#10003;
          </Button>
          <Button
            questionId={currentQuestion.id}
            responseType={ResponseType.SKIP}
            borderColor="slate"
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
          >
            &#126;
          </Button>
          <Button
            questionId={currentQuestion.id}
            responseType={ResponseType.DONT_KNOW}
            borderColor="red"
            questions={questions}
            setCurrentQuestion={setCurrentQuestion}
          >
            &#9747;
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Fiszka;
