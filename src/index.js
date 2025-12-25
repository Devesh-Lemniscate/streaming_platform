import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

import { connectToDatabase } from "./db/index.js";

connectToDatabase();
