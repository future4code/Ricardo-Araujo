import express from "express";
import { BandsController } from "../controllers/BandsController";

export const bandsRouter = express.Router();

bandsRouter.post('/create', new BandsController().createBand);
bandsRouter.get('/:id', new BandsController().getBand);