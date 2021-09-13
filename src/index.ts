import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/database";
import nasaApiInstance from "./nasa-api";
import path from "path";

const app: Application = express();

db.authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.error(e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/", async (req, res) => {
  const nasaRes = await nasaApiInstance({
    method: "GET",
    params: { start_date: "2021-09-01", end_date: "2021-09-10" },
  });
  res.json(nasaRes.data);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(5000, () => {
  console.log("Server Running");
});
