const AI_SALES_API_URL = process.env.AI_SALES_API_URL ?? "http://127.0.0.1/chat";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(AI_SALES_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: body.user_id, message: body.message }),
      signal: AbortSignal.timeout(45000),
    });
    const data = await response.text();
    return new Response(data, { status: response.status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ detail: "Сервис временно недоступен" }, { status: 503 });
  }
}
