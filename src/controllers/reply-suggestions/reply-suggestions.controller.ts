import { ReplySuggestion } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateReplyService } from '../../services/reply-suggestions/create-reply.service';

export class CreateReplyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const body = request.body as ReplySuggestion;
      const service = new CreateReplyService();
      const result = await service.execute(body);

      return response.json(result);
    } catch (error) {
        return response.status(500).json({message: error});
    }
  }
}