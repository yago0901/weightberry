export async function GET(req) {
  try {
    // Pega os parâmetros da URL
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const phone = searchParams.get("phone");

    if (!name || !phone) {
      return Response.json(
        { error: "Nome e telefone são obrigatórios." },
        { status: 400 }
      );
    }

    const apiKey = "335bbd07abab0a0b3b92c276a876499e";
    const offerId = 38458;
    const countryCode = "PL";
    const baseUrl = "https://weight-berry-omega.vercel.app/";
    const price = 155;
    const referrer = searchParams.get("referrer") || baseUrl;

    // Captura o IP do cliente
    const ipResponse = await fetch("https://api64.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const ip = ipData.ip;

    // Monta a URL para a API externa
    const url = new URL("https://api.adcombo.com/api/v2/order/create/");
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("offer_id", offerId);
    url.searchParams.append("country_code", countryCode);
    url.searchParams.append("base_url", baseUrl);
    url.searchParams.append("price", price);
    url.searchParams.append("referrer", referrer);
    url.searchParams.append("name", name);
    url.searchParams.append("phone", phone);
    url.searchParams.append("ip", ip);

    // Faz a requisição GET para a API externa
    const response = await fetch(url.toString(), { method: "GET" });
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return Response.json({ error: "Nome e telefone são obrigatórios." }, { status: 400 });
    }

    const apiKey = "335bbd07abab0a0b3b92c276a876499e";
    const offerId = 38458;
    const countryCode = "PL";
    const baseUrl = "https://weight-berry-omega.vercel.app/";
    const price = 155;
    const referrer = body.referrer || baseUrl;

    // Captura o IP do cliente
    const ipResponse = await fetch("https://api64.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const ip = ipData.ip;

    // Monta a URL para a API externa
    const url = new URL("https://api.adcombo.com/api/v2/order/create/");
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("offer_id", offerId);
    url.searchParams.append("country_code", countryCode);
    url.searchParams.append("base_url", baseUrl);
    url.searchParams.append("price", price);
    url.searchParams.append("referrer", referrer);
    url.searchParams.append("name", name);
    url.searchParams.append("phone", phone);
    url.searchParams.append("ip", ip);

    // Faz a requisição GET para a API externa
    const response = await fetch(url.toString(), { method: "GET" });
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Erro no servidor" }, { status: 500 });
  }
}