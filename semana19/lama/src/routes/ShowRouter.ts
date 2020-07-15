import express from "express";
import { ShowController } from "../controllers/ShowController";

export const showRouter = express.Router();

showRouter.post("/create", new ShowController().createShow);
showRouter.get("/:date", new ShowController().getShowByDate);