import { Suggestion } from "@prisma/client";
import { ResponseSuggestionsModel } from "../../models/response-suggestions-model";
import { prismaCliente } from "../../prisma";

export class GetSuggestionsRepository {
  public async execute(page: number, itemsPerPage: number): Promise<ResponseSuggestionsModel> {
    const suggestions: Suggestion[] = await prismaCliente.suggestion.findMany({
      include: {
        reply_suggestions: true,
      },
      skip: page === 0 ? page : page - 1,
      take: itemsPerPage,
    });
    const total = await this.count();
    const response = new ResponseSuggestionsModel(suggestions, page, itemsPerPage, total);

    return response;
  }

  private async count() {
    const result = await prismaCliente.suggestion.count();

    return result;
  }
}