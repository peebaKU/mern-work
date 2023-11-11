import  express  from "express";
import { creates } from "../controllers/blogController";
export const blogRouter = express.Router()


blogRouter.get('/blog',creates)


