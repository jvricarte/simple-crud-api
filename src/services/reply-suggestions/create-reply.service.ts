import { ReplySuggestion } from '@prisma/client';
import { CreateReplyRepository } from '../../repository/reply-suggestions/create-reply.repository';

export class CreateReplyService {
  public async execute(data: ReplySuggestion): Promise<ReplySuggestion> {
    const repository = new CreateReplyRepository();
    const result = await repository.execute(data);

    return result;
  }
}