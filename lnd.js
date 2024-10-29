import dotenv from "dotenv";
import LndGrpc from "lnd-grpc";

dotenv.config();

const options = {
  host: process.env.HOST,
  cert: process.env.CERT,
  macaroon: process.env.MACAROON,
};

const grpc = new LndGrpc(options);

const connect = async () => {
  await grpc.connect();

  console.log(grpc.state);

  const balance  = await grpc.services.Lightning.walletBalance();

  console.log(balance);
};

connect();


export default grpc;