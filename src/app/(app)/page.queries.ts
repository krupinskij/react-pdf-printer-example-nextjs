import { getRequestContext } from "@cloudflare/next-on-pages";
import { z } from "zod";

type Result = {
  key: string;
  name: string;
  year: number;
  area: number;
  logo: string;
};

const resultSchema = z.object({
  key: z.string(),
  name: z.string(),
  year: z.number(),
  area: z.number(),
  logo: z.string(),
});

const resultsSchema = z.array(resultSchema);

export const query = async (): Promise<Result[]> => {
  const { env } = getRequestContext();

  const d1Result = await env.DB.prepare(
    `
    SELECT * FROM park
    ORDER BY key
  `
  ).all();
  const results = resultsSchema.parse(d1Result.results);

  return results;
};
