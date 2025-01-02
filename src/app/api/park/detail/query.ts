import { Park } from "@/model";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { z } from "zod";
import { query as parkQuery } from "./[park]/query";

type Result = {
  key: string;
  name: string;
  year: number;
  area: number;
  logo: string;
};

const resultKeySchema = z.object({
  key: z.string(),
});

const resultKeysSchema = z.array(resultKeySchema);

export const query = async (): Promise<Park[]> => {
  const { env } = getRequestContext();

  const d1Result = await env.DB.prepare(
    `
    SELECT key FROM park
    ORDER BY key
  `
  ).all();
  const resultKeys = resultKeysSchema.parse(d1Result.results);

  return Promise.all(resultKeys.map(({ key }) => parkQuery(key)));
};
