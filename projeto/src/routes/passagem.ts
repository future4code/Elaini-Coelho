import { Request, Response } from "express";
import PassagemQuery from "../models/querys/passagem";

async function getPassagem(req: Request, res: Response) {
    const passagens = await PassagemQuery.getPassagem();
    res.send(passagens)
}

export default getPassagem;