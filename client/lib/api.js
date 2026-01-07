export async function summarizeUrl(url) {
  const res = await fetch("http://localhost:8080/api/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });
  return res.json();
}
