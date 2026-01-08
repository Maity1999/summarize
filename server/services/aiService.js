import axios from "axios";

export const getAISummary = async (text) => {
  // 1. Ensure text isn't empty to avoid API errors
  if (!text || text.trim().length === 0) return "No content to summarize.";

  try {
    const API_KEY = process.env.GEMINI_API_KEY;
    const MODEL = "gemini-2.5-flash-lite";
    
    const response = await axios({
      method: "post",
      url: `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      data: {
        contents: [
          {
            parts: [{ text: `Summarize the following content in 5-6 concise sentences,what it is actually saying: ${text}` }]
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 500, 
        }
      },
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 20000
    });

    const summary = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!summary) throw new Error("Empty response body");
    return summary;

  } catch (error) {
    // Log the specific error message from Google for easier debugging
    const errorMsg = error.response?.data?.error?.message || error.message;
    console.error("Gemini API Error:", errorMsg);
    
    return `Summary unavailable: ${errorMsg}`;
  }
};
