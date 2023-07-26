import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CartWithProduct {
    async createOne(req: Request, res: Response) {
        const { name, email, id_product } = req.body
        const cart = await prismaClient.cart.create({
            data: {
                user: {
                    create: {
                        name,
                        email
                    }
                },
                product: {
                    connect: {
                        id: id_product
                    }
                }
            }
        })
        return res.json(cart);
    }
}

export default new CartWithProduct