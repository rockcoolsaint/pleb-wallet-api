import LndGrpc from "lnd-grpc";

const options = {
  host: "localhost:10009",
  cert: "~/.lnd/tls.cert",
  macaroon: "~/.lnd/data/chain/bitcoin/mainnet/admin.macaroon",
};

const grpc = new LndGrpc(options);

const connect = async () => {
  await grpc.connect();

  console.log(grpc.state);
};

connect();

export default grpc;
