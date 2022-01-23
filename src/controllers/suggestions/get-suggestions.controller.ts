import { Suggestion } from "@prisma/client";
import { Request, Response } from "express";
import { GetSuggestionsService } from "../../services/suggestions/get-suggestions.service";

type pageQuery = {
  page: number
}

export class GetSuggestionsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const page: any = request.query.page ? request.query.page : 1;
      const itemsPerPage: any = request.query.items_per_page ? request.query.items_per_page : 10;

      const service = new GetSuggestionsService();
      const result = await service.execute(parseInt(page), parseInt(itemsPerPage));

      return response.json(result);
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}