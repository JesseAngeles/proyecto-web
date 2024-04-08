import { Express, Router } from "express";
import { addUser } from "../controllers/users";

const usersRouter = Router();

usersRouter.post('/create', addUser);

export default usersRouter;