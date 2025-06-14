import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { authConfig } from "@/configs/auth";
import { sign } from "jsonwebtoken";

class SessionsController {
    async create(request: Request, response: Response) {
        const { username, password } = request.body;

        const fakeUser = {
            id: 1,
            username: "paulo",
            password: "123456",
            role: "customer",
        };

        if (username !== fakeUser.username || password !== fakeUser.password) {
            throw new AppError("Usuário ou senha Inválido", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({ role: fakeUser.role }, secret, {
            expiresIn,
            subject: fakeUser.id.toString(),
        });

        return response.json({ token });
    }
}

export { SessionsController };
