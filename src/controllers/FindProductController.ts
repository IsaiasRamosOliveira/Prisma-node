import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class FindProductController {
    async findOne(req: Request, res: Response) {
        const { id } = req.params
        const product = await prismaClient.product.findFirst({
            where: {
                id
            },
            include: {
                Cart: true
            }
        })
        return res.json(product);
    }
}

export default new FindProductController