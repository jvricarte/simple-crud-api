import { Router } from "express";
import { suggestionsRoutes } from "./suggestion/suggestions.routes";

const routes = Router();

routes.use(suggestionsRoutes);

export { routes }