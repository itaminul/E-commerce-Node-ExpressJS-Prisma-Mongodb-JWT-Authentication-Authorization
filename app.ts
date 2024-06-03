import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

//"start": "node dist/app.js",