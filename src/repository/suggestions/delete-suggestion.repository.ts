import { Suggestion } from "@prisma/client";
import { prismaCliente } from "../../prisma";

export class DeleteSuggestionRepository {
  public async execute(id: string): Promise<Suggestion> {
    const result = await prismaCliente.suggestion.delete({
      where: {
        id
      }
    });

    return result;
  }
}