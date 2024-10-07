import dotenv from "dotenv";
import server from './src/config/server';
import connectDB from "./src/config/db";

dotenv.config();

const PORT = 3000;

connectDB();

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
