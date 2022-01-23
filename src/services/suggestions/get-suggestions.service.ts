import { Suggestion } from "@prisma/client";
import { ResponseSuggestionsModel } from "../../models/response-suggestions-model";
import { GetSuggestionsRepository } from "../../repository/suggestions/get-suggestions.repository"

export class GetSuggestionsService {
  public async execute(page: number, itemsPerPage: number): Promise<ResponseSuggestionsModel> {
    const repository = new GetSuggestionsRepository();
    const result = await repository.execute(page, itemsPerPage);

    return result;
  }
}