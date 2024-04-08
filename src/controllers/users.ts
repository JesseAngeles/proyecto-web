import { Request, Response } from "express";
import UserModel from "../models/users";
import { Op, OrderItem } from "sequelize";


export const addUser = async (req: Request, res: Response) => {
    try {
        const name: string = req.body.name;
        const email: string = req.body.email;
        const username: string = req.body.username;
        const password: string = req.body.password;

        if (name && email && username && password) {
            const existingUser = await UserModel.findOne({
                where: {
                    [Op.or]: [
                        { username: username },
                        { email: email }
                    ]
                }
            });

            if (existingUser?.email == email) {
                return res.status(400).send(`Email already in use`);
            }

            if (existingUser?.username == username) {
                return res.status(400).send(`Username already in use`);
            }

            const createdUser = await UserModel.create({
                name: name,
                email: email,
                username: username,
                password: password
            });

            return res.status(201).json(createdUser);
        } else {
            return res.status(400).send(`Incomplete data`);
        }

    } catch (error) {
        return res.status(500).send(`Internal server error: ${error}`);
    }
}