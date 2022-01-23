import { Router } from "express";
import { CreateSuggestionController } from "../../controllers/suggestions/create-suggestion.controller";

const suggestionsRoutes = Router();

suggestionsRoutes.post('/suggestions', new CreateSuggestionController().handle);

export { suggestionsRoutes };