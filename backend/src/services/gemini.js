import { GoogleGenAI } from "@google/genai";

let client = null;

// ✅ lazy initialization (safe with dotenv + ESM)
function getClient() {
  if (!client) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is missing");
    }

    client = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
  }
  return client;
}

export async function analyzeWithGemini(content) {
  console.log("🤖 Gemini called with:", content);

  const ai = getClient();

  const SYSTEM_PROMPT = `
You are an AI assistant designed for a Misinformation Awareness & Online Trust platform named TrueDetective.

IMPORTANT RULES:
- You do NOT decide what is true or false.
- You do NOT judge political or health beliefs.
- You do NOT give final conclusions.

Your role is to help users think critically by explaining:
- why content may be misleading
- what emotional or manipulative patterns exist
- what context may be missing
- how users can verify information themselves

Use calm, neutral, educational language.
Do NOT sound like a chatbot.
Do NOT use fear-based or judgmental language.
`;

  const USER_PROMPT = `
Analyze the following content carefully and responsibly:

"${content}"
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: SYSTEM_PROMPT + "\n\n" + USER_PROMPT,
  });

  // ✅ version-safe text extraction
  let text = "";

  if (typeof response.text === "string") {
    text = response.text;
  } else if (typeof response.text === "function") {
    text = response.text();
  } else if (
    response.response?.candidates?.[0]?.content?.parts?.[0]?.text
  ) {
    text = response.response.candidates[0].content.parts[0].text;
  }

  if (!text) {
    throw new Error("Gemini returned no usable text");
  }

  console.log("🧾 Gemini response received");

  return text;
}
