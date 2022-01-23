import { Suggestion } from '@prisma/client';
import { Request, Response } from 'express';
import { UpdateSuggestionService } from '../../services/suggestions/update-suggestion.service';

export class UpdateSuggestionController {
  public async handle(request: Request, response: Response): Promise<Response<Suggestion>> {
    try {
      const { id } = request.params;
      const body = request.body as Suggestion;
      const service = new UpdateSuggestionService();
      const result = await service.execute(id, body);

      return response.json(result);
    } catch (error) {
      return response.status(500).json({message: error});
    }
  }
}