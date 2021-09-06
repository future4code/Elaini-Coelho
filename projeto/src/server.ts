import express from 'express';
import cors from 'cors';

import getUsuarios from './routes/usuarios';
import getProduto from './routes/produtos'
import getPassagem from './routes/passagem';

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', getUsuarios)
app.get('/', getProduto)
app.get('/', getPassagem)

const appPort = process.env.PORT || 3003
const server = app.listen(appPort, () => {
    console.log('Tá rodando')
})