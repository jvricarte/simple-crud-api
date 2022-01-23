import { Suggestion } from "@prisma/client";
import { Request, Response } from "express";
import { GetSuggestionIdService } from "../../services/suggestions/get-suggestion-id.service";

export class GetSuggestionIdController {
  public async handle(request: Request, response: Response): Promise<Response<Suggestion>> {
    try {
      const { id } = request.params;
      const service = new GetSuggestionIdService();
      const result = await service.execute(id);

      return response.json(result);
    } catch (error) {
      
    }
  }
}