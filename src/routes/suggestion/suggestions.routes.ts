import { Router } from "express";
import { CreateSuggestionController } from "../../controllers/suggestions/create-suggestion.controller";
import { GetSuggestionsController } from "../../controllers/suggestions/get-suggestions.controller";

const suggestionsRoutes = Router();

suggestionsRoutes.post('/suggestions', new CreateSuggestionController().handle);
suggestionsRoutes.get('/suggestions', new GetSuggestionsController().handle);

export { suggestionsRoutes };