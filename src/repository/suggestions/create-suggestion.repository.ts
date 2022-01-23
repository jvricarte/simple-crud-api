import { Suggestion } from "@prisma/client";
import { prismaCliente } from "../../prisma";

export class CreateSuggestionRepository {
  public async execute(data: Suggestion): Promise<Suggestion> {
    const result = await prismaCliente.suggestion.create({
      data
    });

    return result;
  }
}