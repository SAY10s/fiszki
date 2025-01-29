"use server";

import prisma from "@/lib/prisma";
import { ResponseType } from "@prisma/client";

export async function handleKnow(questionId: number) {
  try {
    await prisma.response.create({
      data: {
        questionId: questionId,
        type: ResponseType.KNOW,
      },
    });
  } catch (error) {
    console.error("Detailed error:", error);
    alert(
      "Wystąpił błąd przy tworzeniu odpowiedzi. Sprawdź konsolę, aby zobaczyć szczegóły."
    );
  }
}
