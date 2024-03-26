import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import activityRoutes from "./routes/activityRouter.ts";
import courseRoutes from "./routes/courseRouter.ts";
import studantsRoutes from "./routes/studantsRouter.ts";
import taskRoutes from "./routes/taskRouter.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());


(async () => {
  app.use("/estudante", studantsRoutes);
  app.use("/curso", courseRoutes);
  app.use("/tarefa", taskRoutes);
  app.use("/atividade", activityRoutes);


  try {
    app.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

export default app;