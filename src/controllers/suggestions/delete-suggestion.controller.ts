import { DeleteSuggestionService } from './../../services/suggestions/delete-suggestion.service';
import { Request, Response } from 'express';
export class DeleteSuggestionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const service = new DeleteSuggestionService();
      const result = await service.execute(id);

      return response.json(result);
    } catch (error) {
      return response.status(500).json({message: error});
    }
  }
}