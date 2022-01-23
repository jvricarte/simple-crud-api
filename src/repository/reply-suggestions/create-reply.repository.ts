import { ReplySuggestion } from "@prisma/client";
import { prismaCliente } from "../../prisma";

export class CreateReplyRepository {
  public async execute(data: ReplySuggestion): Promise<ReplySuggestion> {
    const result = await prismaCliente.replySuggestion.create({
      data
    });

    return result;
  }
}