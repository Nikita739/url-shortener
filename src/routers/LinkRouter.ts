import { Router } from 'express';
import LinkController from "../controllers/LinkController";

const linkRouter = Router();
linkRouter.post('/create', LinkController.createLink);
linkRouter.get('/:uuid', LinkController.getLink);

export default linkRouter;