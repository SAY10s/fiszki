"use server";

import prisma from "@/lib/prisma";
import { ResponseType } from "@prisma/client";

export async function handleKnow() {
  try {
    await prisma.response.create({
      data: {
        questionId: 1,
        type: ResponseType.KNOW,
      },
    });
  } catch (error) {
    console.error("Detailed error:", error); // Logowanie szczegółowego błędu
    alert(
      "Wystąpił błąd przy tworzeniu odpowiedzi. Sprawdź konsolę, aby zobaczyć szczegóły."
    );
  }
}
