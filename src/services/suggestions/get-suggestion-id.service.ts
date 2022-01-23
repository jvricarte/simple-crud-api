import { Suggestion } from "@prisma/client";
import { GetSuggestionIdRepository } from "../../repository/suggestions/get-suggestion-id.repository";

export class GetSuggestionIdService {
  public async execute(id: string): Promise<Suggestion> {
    const repository = new GetSuggestionIdRepository();
    const result = await repository.execute(id);

    return result;
  }
}