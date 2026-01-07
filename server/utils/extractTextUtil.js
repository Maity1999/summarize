import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export const extractReadableText = (html, url) => {
  const dom = new JSDOM(html, { url });
  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  return article?.textContent?.slice(0, 5000) || "";
};
