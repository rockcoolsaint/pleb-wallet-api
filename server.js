import express from 'express';
import cors from 'cors';
import { connect, grpc } from './lnd.js';

const app = express();

app.use(express.json());
app.use(cors());

connect();

app.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome ${grpc.state}` });
})

export default app;