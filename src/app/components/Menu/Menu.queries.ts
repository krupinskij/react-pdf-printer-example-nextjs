import { getRequestContext } from "@cloudflare/next-on-pages";
import { z } from "zod";

type Result = {
  key: string;
  name: string;
  logo: string;
};

const resultSchema = z.object({
  key: z.string(),
  name: z.string(),
  logo: z.string(),
});

const resultsSchema = z.array(resultSchema);

export const query = async (): Promise<Result[]> => {
  const { env } = getRequestContext();

  const d1Result = await env.DB.prepare(
    "SELECT key, name, logo FROM park"
  ).all();
  return resultsSchema.parse(d1Result.results);
};
