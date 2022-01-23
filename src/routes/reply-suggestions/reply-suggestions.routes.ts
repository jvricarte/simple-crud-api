import { Router } from "express";
import { CreateReplyController } from "../../controllers/reply-suggestions/reply-suggestions.controller";

const replySuggestionsRoutes = Router();

replySuggestionsRoutes.post('/reply/suggestion', new CreateReplyController().handle);

export { replySuggestionsRoutes };