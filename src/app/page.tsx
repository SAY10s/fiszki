import prisma from "@/lib/prisma";
import Button from "./components/Button";
import { ResponseType } from "@prisma/client";

export default async function Home() {
  const questions = await prisma.question.findMany({
    include: {
      responses: true,
    },
  });
  const currentQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  console.table(questions);

  questions.forEach((question) => {
    const knowCount = question.responses.filter(
      (r) => r.type === "KNOW"
    ).length;
    const dontKnowCount = question.responses.filter(
      (r) => r.type === "DONT_KNOW"
    ).length;
    const skipCount = question.responses.filter(
      (r) => r.type === "SKIP"
    ).length;

    console.log(`Pytanie: ${question.text}`);
    console.log(
      `Wiem: ${knowCount}, Nie wiem: ${dontKnowCount}, Skip: ${skipCount}`
    );
  });

  return (
    <main className="flex flex-col items-center text-center">
      <div className="pt-12 pb-8">
        <h1 className="text-5xl">ALGEBRA</h1>
        <h1 className="text-2xl">Wszystkie pytania</h1>
      </div>
      <div className="flex flex-col  max-w-xl  w-full p-4">
        <div className=" text-center  p-4 border-slate-200 border-2 rounded-lg ">
          <h2 className="text-3xl">{currentQuestion.text}</h2>
          <div className="flex justify-between pt-8">
            <div>To pytanie pojawiło się już X razy</div>
            <div>X/Y/Z</div>
          </div>
        </div>
        <div className="flex justify-center mt-4 text-3xl">
          <Button
            questionId={currentQuestion.id}
            responseType={ResponseType.KNOW}
            borderColor="green"
          >
            &#10003;
          </Button>
          <button className="p-1 border-slate-400 border-2 m-1 w-20 rounded-lg">
            &#126;
          </button>
          <button className="p-1 border-red-400 border-2 m-1 w-20 rounded-lg">
            &#9747;
          </button>
        </div>
      </div>
    </main>
  );
}
