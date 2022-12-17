import express from 'express';
import cors from 'cors';

import { routes } from './routes';
// import createConnection from './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.use((request, response) => {
  response.status(404).json({ message: 'not found' })
})

export { app };