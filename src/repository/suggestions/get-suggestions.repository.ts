import { Suggestion } from "@prisma/client";
import { prismaCliente } from "../../prisma";

export class GetSuggestionsRepository {
  public async execute(): Promise<Suggestion[]> {
    const result = await prismaCliente.suggestion.findMany();

    return result;
  }
}