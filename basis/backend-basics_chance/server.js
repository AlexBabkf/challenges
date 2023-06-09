import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end(
    `Hello, my name is ${chance.name()} and I am ${chance.age()} years old. I am a ${chance.profession()}.`
  );
});

export { server };
