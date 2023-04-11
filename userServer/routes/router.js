import express from "express";
import UserController from "../controller/userController.js";

const router = express.Router();

//user routes and endpoint
router.post("/create_user", UserController.createUser);
router.post("/login", UserController.logInUser);

export default router;
