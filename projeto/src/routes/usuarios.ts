import { Request, Response } from "express";
import UsuarioQuery from "../models/querys/usuarios";

async function getUsuarios(req: Request, res: Response) {
    const usuarios = await UsuarioQuery.getUsuarios();
    res.send(usuarios)
}

export default getUsuarios;