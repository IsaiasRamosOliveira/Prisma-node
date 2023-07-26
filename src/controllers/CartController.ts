import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CartController {
    async createOne(req: Request, res: Response) {
        const { id_user, id_product } = req.body
        const cart = await prismaClient.cart.create({
            data: {
                id_user,
                id_product
            }
        })
        return res.json(cart);
    }
}

export default new CartController