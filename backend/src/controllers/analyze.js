import { analyzeWithGemini } from "../services/gemini.js";

export const analyzeContent = async (req, res) => {
  try {
    console.log("📩 Controller hit");
    console.log("📥 Body:", req.body);

    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Content is required",
      });
    }

    console.log("🧠 Sending to Gemini...");

    const result = await analyzeWithGemini(content);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("❌ Analyze error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to analyze content",
    });
  }
};
