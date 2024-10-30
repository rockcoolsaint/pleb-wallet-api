import express from "express";
import {getBalance} from "../lnd.js"

const router = express.Router();

router.get("/balance", async (req, res) => {
  try {
    const balance = await getBalance();
    return res.status(200).json(balance);
  } catch(err) {
    res.status(500).json(err);
  }
});

export {router};