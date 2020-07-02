import express from "express";
import {UsersController} from "../controllers/UsersController";

export const usersRouter = express.Router();

usersRouter.post('/signup', new UsersController().signUp);
usersRouter.get('/login', new UsersController().login);