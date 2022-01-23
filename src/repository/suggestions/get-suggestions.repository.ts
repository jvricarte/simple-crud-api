import { Suggestion } from "@prisma/client";
import { ResponseSuggestionsModel } from "../../models/response-suggestions-model";
import { prismaCliente } from "../../prisma";

export class GetSuggestionsRepository {
  public async execute(page: number, itemsPerPage: number): Promise<ResponseSuggestionsModel> {
    const suggestions: Suggestion[] = await prismaCliente.suggestion.findMany({
      skip: page === 0 ? page : page - 1,
      take: itemsPerPage
    });

    const response = new ResponseSuggestionsModel(suggestions, page, itemsPerPage)

    return response;
  }
}