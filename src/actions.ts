"use server";

import prisma from "@/lib/prisma";
import { ResponseType } from "@prisma/client";

export async function handleQuestionResponse(
  questionId: number,
  responseType: ResponseType
) {
  try {
    await prisma.response.create({
      data: {
        questionId: questionId,
        type: responseType,
      },
    });
  } catch (error) {
    console.error("Detailed error:", error);
    alert(
      "Wystąpił błąd przy tworzeniu odpowiedzi. Sprawdź konsolę, aby zobaczyć szczegóły."
    );
  }
}
