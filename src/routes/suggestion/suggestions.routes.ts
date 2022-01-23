import { GetSuggestionIdController } from './../../controllers/suggestions/get-suggestion-id.controller';
import { Router } from "express";
import { CreateSuggestionController } from "../../controllers/suggestions/create-suggestion.controller";
import { GetSuggestionsController } from "../../controllers/suggestions/get-suggestions.controller";
import { UpdateSuggestionController } from '../../controllers/suggestions/update-suggestion.controller';

const suggestionsRoutes = Router();

suggestionsRoutes.post('/suggestions', new CreateSuggestionController().handle);
suggestionsRoutes.get('/suggestions', new GetSuggestionsController().handle);
suggestionsRoutes.get('/suggestion/:id', new GetSuggestionIdController().handle);
suggestionsRoutes.put('/suggestion/:id', new UpdateSuggestionController().handle);

export { suggestionsRoutes };