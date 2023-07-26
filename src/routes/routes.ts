import { Router } from "express";
import userController from "../controllers/UserController";
import productController from "../controllers/ProductController";
import cartController from "../controllers/CartController";
const route = Router();

route
    .post("/user", userController.createOne)
    .post("/product", productController.createOne)
    .post("/cart", cartController.createOne)


export { route }