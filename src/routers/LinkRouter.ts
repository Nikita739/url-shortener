import { Router } from 'express';
import LinkController from "../controllers/LinkController";
import AuthMiddleware from "../middleware/authMiddleware";

const linkRouter = Router();
linkRouter.post('/create', AuthMiddleware, LinkController.createLink);
linkRouter.get('/:uuid', LinkController.getLink);

export default linkRouter;