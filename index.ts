import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";

import { seed } from "./seed.js";



const PORT = process.env.PORT;

try {
  seed();
} catch (error) {
    console.error(error)
} finally {
  app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT || 3000}`);
  });
}
