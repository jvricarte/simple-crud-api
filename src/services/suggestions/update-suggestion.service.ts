import { Suggestion } from '@prisma/client';
import { UpdateSuggestionRepository } from '../../repository/suggestions/update-suggestion.repository';

export class UpdateSuggestionService {
  public async execute(id: string, data: Suggestion): Promise<Suggestion> {
    const repository = new UpdateSuggestionRepository();
    const result = await repository.execute(id, data);

    return result;
  }
}