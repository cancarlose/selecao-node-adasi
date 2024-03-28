import dotenv from 'dotenv';
import express from "express";
import activityRoutes from "./routes/activityRouter.ts";
import courseRoutes from "./routes/courseRouter.ts";
import studantsRoutes from "./routes/studantsRouter.ts";
import taskRoutes from "./routes/taskRouter.ts";

dotenv.config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); 

app.use("/estudante", studantsRoutes);
app.use("/curso", courseRoutes);
app.use("/tarefa", taskRoutes);
app.use("/atividade", activityRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

export default app;