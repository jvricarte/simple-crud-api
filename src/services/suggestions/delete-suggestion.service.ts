import { DeleteSuggestionRepository } from "../../repository/suggestions/delete-suggestion.repository";

export class DeleteSuggestionService {
  public async execute(id: string): Promise<string> {
    const repository = new DeleteSuggestionRepository();
    await repository.execute(id);

    return "Succesfully deleted";
  }
}