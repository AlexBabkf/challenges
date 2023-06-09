import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.end("Hello, Alex!");
});

export { server };
