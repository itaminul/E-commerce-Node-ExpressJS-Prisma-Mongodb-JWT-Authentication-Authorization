import express, { Express, Request, Response, Application } from "express";
import bodyParser, { BodyParser } from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import router from "./src/routes/indexRoutes";
import prismaClientExceptionFilter from "./src/exceptionFilter/PrismaClientExceptionFilter";
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(helmet());
app.use(prismaClientExceptionFilter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

//"start": "node dist/app.js",
