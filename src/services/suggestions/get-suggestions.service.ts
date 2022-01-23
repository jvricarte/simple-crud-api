import { Suggestion } from "@prisma/client";
import { GetSuggestionsRepository } from "../../repository/suggestions/get-suggestions.repository"

export class GetSuggestionsService {
  public async execute(): Promise<Suggestion[]> {
    const repository = new GetSuggestionsRepository();
    const result = await repository.execute();

    return result;
  }
}