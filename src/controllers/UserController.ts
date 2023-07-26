import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class UserController {
    async createOne(req: Request, res: Response) {
        const { email, name } = req.body
        const user = await prismaClient.user.create({
            data: {
                email,
                name
            }
        })
        return res.json(user);
    }
}

export default new UserController