import { QueryResultSet, Flipside, Query } from "@flipsidecrypto/sdk";

const getData = async (id: string = "816"): Promise<QueryResultSet> => {
  const flipside = new Flipside(
    `${process.env.FLIPSIDE_KEY}`,
    "https://node-api.flipsidecrypto.com"
  );

  const rawQuery = `
select 
  block_timestamp as "Timestamp",
  tx_id as "TX ID",
  buyer as "Buyer wallet",
  seller as "Seller wallet",
  price as "Price"
from flow.core.ez_nft_sales s join flow.core.dim_allday_metadata m on s.nft_id = m.nft_id
where moment_stats_full:flowID = '${+id}' and tx_succeeded = true
    `;

  const query: Query = {
    sql: rawQuery,
    ttlMinutes: 60 * 6,
    timeoutMinutes: 60 * 6,
    cached: true,
  };

  return await flipside.query.run(query);
};

export default async function addressHandler(req: any, res: any) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const data = await getData(id);
      res.status(200).json(data);
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
