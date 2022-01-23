import { Suggestion } from "@prisma/client";
import { prismaCliente } from "../../prisma";

export class GetSuggestionIdRepository {
  public async execute(id: string): Promise<Suggestion> {
    const result = await prismaCliente.suggestion.findFirst({
      where: {
        id
      },
      include: {
        reply_suggestions: true
      }
    });

    return result;
  }
}