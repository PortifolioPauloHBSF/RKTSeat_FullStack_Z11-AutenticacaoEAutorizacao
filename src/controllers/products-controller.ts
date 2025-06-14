import { Request, Response } from "express";

class ProductsController {
    async index(request: Request, response: Response) {
        return response.json({ message: "Ok" });
    }

    async create(request: Request, response: Response) {
        return response.status(201).json({ message: [request.user?.id, request.user?.role] });
    }
}

export { ProductsController };
