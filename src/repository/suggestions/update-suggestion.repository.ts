import { Suggestion } from "@prisma/client";
import { prismaCliente } from "../../prisma";

export class UpdateSuggestionRepository {
  public async execute(id: string, data: Suggestion): Promise<Suggestion> {
    const result = await prismaCliente.suggestion.update({
      where: {
        id
      },
      data
    });

    return result;
  }
}