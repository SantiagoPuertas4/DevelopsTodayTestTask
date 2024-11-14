import express from 'express';
import cors from 'cors';
import { mainRouter } from './routes/mainRouter.js';

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/api/v1', mainRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
