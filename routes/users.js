import express from "express";
import { verifyRole, verifyToken } from "../middleware/authMiddleware.js";
import { deletUser, getProfile, getUsers } from "../controller/userController.js";

const router = express.Router();

router.get("/", verifyToken, verifyRole("admin"), getUsers)
router.delete("/:id", verifyToken, verifyRole("admin"), deletUser)
router.get("/me", verifyToken, getProfile);

export default router;