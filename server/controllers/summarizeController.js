import { fetchPageHtml } from "../services/fetchPageService.js";
import { extractReadableText } from "../utils/extractTextUtil.js";
import { getAISummary } from "../services/aiService.js";

export const summarizeUrl = async (req, res) => {
  try {
    const { url } = req.body;
    console.log("Received URL:", url);

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    console.log("Fetching HTML...");
    const html = await fetchPageHtml(url);
    console.log("HTML fetched, length:", html.length);

    console.log("Extracting text...");
    const text = extractReadableText(html, url);
    console.log("Text extracted, length:", text.length);

    if (!text) {
      return res.status(400).json({ error: "Unable to extract content" });
    }

    console.log("Getting AI summary...");
    const summary = await getAISummary(text);
    console.log("Summary generated");

    res.json({ summary });
  } catch (error) {
    console.error("Error in summarizeUrl:", error.message);
    console.error(error.stack);
    res.status(500).json({ error: "Failed to summarize URL" });
  }
};
