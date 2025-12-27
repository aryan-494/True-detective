
import express from "express";
import cors from "cors";
import analyzeRoute from "./routes/analyze.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log("🌍 Incoming request:", req.method, req.url);
  next();
});


app.use("/analyze", analyzeRoute);

app.get("/", (req, res) => {
  res.send("🔥 EXPRESS BACKEND WORKING 🔥");
});

export default app;
