import express from 'express';
import { mainRouter } from './routes/mainRouter.js';

const app = express();

const PORT = 4000;

app.use(express.json());

app.use('/api/v1', mainRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
