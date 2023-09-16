import { Errors } from "@/protocols";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error: Errors, req: Request, res: Response, next: NextFunction) {
    console.log(error)

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(500).send("Internal server error")
}
