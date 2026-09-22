import express from "express";
import authRoute from "../routes/authRoute.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API Top-Flop OK");
});

app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log(`🚀 Server lancé sur http://localhost:3001 🚀`);
});
