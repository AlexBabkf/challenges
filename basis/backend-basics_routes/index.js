import { server } from "./server.js";

const PORT = 8000;

const listener = server.listen(PORT, () => {
  console.log(
    "Your server is listening on port: http://localhost:" +
      listener.address().port
  );
});
