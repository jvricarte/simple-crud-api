import { Router } from "express";
import { replySuggestionsRoutes } from "./reply-suggestions/reply-suggestions.routes";
import { suggestionsRoutes } from "./suggestion/suggestions.routes";

const routes = Router();

routes.use(suggestionsRoutes);
routes.use(replySuggestionsRoutes);

export { routes }