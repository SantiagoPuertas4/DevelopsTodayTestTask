import express from 'express';

import { mainRouter } from './src/routes/mainRouter.js';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/v1', mainRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
