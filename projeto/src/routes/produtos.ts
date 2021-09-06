import { Request, Response } from "express";
import ProdutoQuery from "../models/querys/produto";

async function getProduto(req: Request, res: Response) {
    const produtos = await ProdutoQuery.getProduto();
    res.send(produtos)
}

export default getProduto;