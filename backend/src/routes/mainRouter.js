import express from 'express';

import { countryRouter } from './routers/countryRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/country', countryRouter);
