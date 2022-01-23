import { Suggestion } from "@prisma/client";
import { Request, Response } from "express";
import { GetSuggestionsService } from "../../services/suggestions/get-suggestions.service";

export class GetSuggestionsController {
  public async handle(request: Request, response: Response): Promise<Response<Suggestion[]|any>> {
    try {
      const service = new GetSuggestionsService();
      const result = await service.execute();

      return response.json(result);
    } catch (error) {
      return response.status(500).json({message: error});
    }
  }
}