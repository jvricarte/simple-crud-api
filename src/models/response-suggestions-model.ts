import { Suggestion } from "@prisma/client";

export class ResponseSuggestionsModel {
  private items: Suggestion[];
  private page: number;
  private itemsPerPage: number;
  private total: number;

  constructor(items: Suggestion[], page: number, itemsPerPage: number, total: number) {
    this.items = items;
    this.page = page;
    this.itemsPerPage = itemsPerPage;
    this.total = total;
  }
}