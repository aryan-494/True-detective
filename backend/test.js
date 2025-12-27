import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config(); // 🔥 VERY IMPORTANT

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // 🔥 FORCE API KEY MODE
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain misinformation in one sentence.",
  });

  console.log("✅ Gemini response:");
  console.log(response.text);
}

main().catch((err) => {
  console.error("❌ Gemini failed:");
  console.error(err);
});
