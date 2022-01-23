import { Suggestion } from "@prisma/client";
import { CreateSuggestionRepository } from "../../repository/suggestions/create-suggestion.repository";

export class CreateSuggestionService {
  public async execute(data: Suggestion): Promise<Suggestion> {
    const repository = new CreateSuggestionRepository();
    const result = await repository.execute(data);

    return result;
  }
}