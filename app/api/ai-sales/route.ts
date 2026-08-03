export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch("http://31.56.117.24/api/ai-sales", {
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
