import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class ProductController {
    async createOne(req: Request, res: Response) {
        const { name, price } = req.body
        const product = await prismaClient.product.create({
            data: {
                name,
                price
            }
        })
        return res.json(product);
    }
}

export default new ProductController