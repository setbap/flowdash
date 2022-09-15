import { QueryResultSet, Flipside, Query } from "@flipsidecrypto/sdk";

const getData = async (id: string = "816"): Promise<QueryResultSet> => {
  const flipside = new Flipside(
    `${process.env.FLIPSIDE_KEY}`,
    "https://node-api.flipsidecrypto.com"
  );

  const rawQuery = `
select *
from flow.core.dim_allday_metadata
where moment_stats_full:flowID='${+id}'
limit 1
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
