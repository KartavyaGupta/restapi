import express from "express";
const app = express();
import web from "./routes/web.js";
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

import { connectDB } from "./db/connectDB.js";

connectDB(DATABASE_URL);
app.use(express.json());
app.use("/student", web);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
