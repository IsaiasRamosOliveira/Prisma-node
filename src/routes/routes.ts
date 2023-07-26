import { Router } from "express";
import userController from "../controllers/UserController";
import productController from "../controllers/ProductController";
const route = Router();

route
    .post("/user", userController.createOne)
    .post("/product", productController.createOne)


export { route }