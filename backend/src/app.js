import express from "express"
import cors from "cors"
import analyzeRoute from "./routes/analyze.js"

const app = express()

// ✅ CORS (frontend → backend)
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)

// ✅ Body parser
app.use(express.json())

// ✅ Debug incoming requests
app.use((req, res, next) => {
  console.log("🌍 Incoming request:", req.method, req.url)
  next()
})

// ✅ Routes
app.use("/analyze", analyzeRoute)

// ✅ Health check
app.get("/", (req, res) => {
  res.send("TrueDetective backend is running")
})

export default app
