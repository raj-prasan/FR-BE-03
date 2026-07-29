import { app } from "./app.js";
import dotenv from "dotenv";
import { seed } from "./seed.js";

dotenv.config();

const PORT = process.env.PORT;

try {
  seed();
} catch (error) {
    console.error(error)
} finally {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
  });
}
