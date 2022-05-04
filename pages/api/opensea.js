const sdk = require("api")("@opensea/v1.0#bg4ikl1mk428b");

export default function handler(req, res) {
  sdk["getting-assets"]({
    owner: "0x5A7C0FF8cdf14230d80371C633de8f34FEE4BF9C",
    order_direction: "desc",
    limit: "50",
    include_orders: "false",
    "X-API-KEY": "2b069923a89d416aa68613d5543306e0",
  })
    .then((business) => {
      const thumbnails = business.assets.map((asset) => {
        return asset?.image_url;
      });
      res.status(200).json({ thumbnails });
    })
    .catch((err) => console.error(err));
}
