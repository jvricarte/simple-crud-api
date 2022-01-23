import { CreateSuggestionService } from './../../services/suggestions/create-suggestion.service';
import { Suggestion } from "@prisma/client";
import { Request, Response } from "express";

export class CreateSuggestionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const body = request.body as Suggestion;
      const service = new CreateSuggestionService();
      const result = await service.execute(body);

      return response.json(result);
    } catch (error) {
      return response.status(500).json({message: error});
    }
  }
}