import express from 'express';
import { GetController } from '../../controllers/countries/controllers/GetController.js';

export const countryRouter = express.Router();

countryRouter.get('/all', GetController.getAll);
countryRouter.get('/borders/:countryCode', GetController.getBorders);
countryRouter.get('/population', GetController.getPopulation);
countryRouter.get('/flag', GetController.getFlag);
