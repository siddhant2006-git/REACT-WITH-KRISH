const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

/**
 * Fetch details for a woman. By default this returns mocked data when no API key
 * is provided so the UI can be developed without exposing secrets.
 *
 * Parameters:
 *  - params: { name, country, period }
 *  - options: { apiKey, proxyUrl }
 */
export async function fetchWomanDetails(params = {}, options = {}) {
  const { name = "Unknown", country = "", period = "" } = params;
  const { apiKey, proxyUrl } = options;

  // If no key and no proxy, return mocked data for development
  if (!apiKey && !proxyUrl) {
    return {
      name,
      summary: `Mock summary for ${name}. Use a real API key or proxy to fetch live data.`,
      field: "Arts",
      notableWorks: ["Work A", "Work B"],
      country: country || "Global",
      birthYear: 1900,
      era: period || "historical",
      promotionIdeas: ["Short film", "Interactive quiz", "Local exhibits"],
    };
  }

  // Build body for OpenAI Chat Completions (replace model as needed)
  const body = {
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a concise facts generator about notable women.",
      },
      {
        role: "user",
        content: `Provide JSON details for ${name}. Include: summary (1-2 lines), field, notableWorks array, country, birthYear, era (historical|current), and 3 short promotion ideas.`,
      },
    ],
    temperature: 0.7,
    max_tokens: 600,
  };

  // If proxyUrl is provided, call the proxy so the key is never exposed to clients
  if (proxyUrl) {
    const res = await fetch(`${proxyUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ params, body }),
    });
    if (!res.ok) throw new Error("Proxy error: " + res.statusText);
    return res.json();
  }

  // Otherwise call OpenAI directly with the provided apiKey (not recommended for public clients)
  const res = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error("OpenAI error: " + res.status + " - " + txt);
  }

  const data = await res.json();
  const text = data.choices?.[0]?.message?.content || "";
  try {
    return JSON.parse(text);
  } catch {
    return {
      name,
      summary: text,
      field: "Unknown",
      notableWorks: [],
      country,
      era: period,
    };
  }
}
