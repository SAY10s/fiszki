import prisma from "@/lib/prisma";
import Fiszka from "./components/Fiszka";

export default async function Home() {
  const questions = await prisma.question.findMany({
    include: {
      responses: true,
    },
  });

  return <Fiszka questionsProp={questions} />;
}
