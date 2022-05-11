const sdk = require("api")("@opensea/v1.0#bg4ikl1mk428b");

export default async function handler(req, res) {
  const body = await JSON.parse(req.body);
  const cursor = body.cursor;
  try {
    const response = await sdk["getting-assets"]({
      owner: "0x5A7C0FF8cdf14230d80371C633de8f34FEE4BF9C",
      order_direction: "desc",
      limit: "50",
      include_orders: "false",
      "X-API-KEY": "2b069923a89d416aa68613d5543306e0",
      cursor,
    });
    if (response?.assets) {
      res.status(200).json({ assets: response?.assets, next: response?.next });
    }
  } catch (err) {
    console.log(err);
  }
}
