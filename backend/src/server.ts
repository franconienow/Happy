import express from 'express';
import'express-async-errors';
import path from 'path';
import Cors from 'cors';
import "./database/connection";

import routes from './routes';
import errorHandeler from './errors/handler';

const app = express();

app.use(Cors);
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')))
app.use(errorHandeler);

app.listen(3333);