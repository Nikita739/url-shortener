import linkRouter from "./LinkRouter";
import userRouter from "./UserRouter";
import {Router} from "express";

const router = Router();

router.use("/link", linkRouter);
router.use("/user", userRouter);

export default router;