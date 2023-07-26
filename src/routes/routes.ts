import { Router } from "express";
import userController from "../controllers/UserController";
import productController from "../controllers/ProductController";
import cartController from "../controllers/CartController";
import cartWithProduct from "../controllers/CartWithProduct";
const route = Router();

route
    .post("/user", userController.createOne)
    .post("/product", productController.createOne)
    .post("/cart", cartController.createOne)
    .post("/cartWithProduct", cartWithProduct.createOne)


export { route }