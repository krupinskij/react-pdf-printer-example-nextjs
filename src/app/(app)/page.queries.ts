import { getRequestContext } from "@cloudflare/next-on-pages";
import { z } from "zod";

type Symbol = {
  name: string;
  url: string | null;
};

type Result = {
  key: string;
  name: string;
  year: number;
  area: number;
  symbols: Symbol[];
  logo: string;
};

const resultSchema = z.object({
  key: z.string(),
  name: z.string(),
  year: z.number(),
  area: z.number(),
  logo: z.string(),
  symbol_name: z.string(),
  symbol_url: z.string().nullable(),
});

const resultsSchema = z.array(resultSchema);

export const query = async (): Promise<Result[]> => {
  const { env } = getRequestContext();

  const d1Result = await env.DB.prepare(
    "SELECT p.*, s.name as symbol_name, s.url as symbol_url FROM park p LEFT JOIN symbol s ON p.key = s.park_key"
  ).all();
  const results = resultsSchema.parse(d1Result.results);

  const resultSet = results.reduce<Map<string, Result>>((acc, curr) => {
    const result = acc.get(curr.key);

    if (!result) {
      acc.set(curr.key, {
        key: curr.key,
        name: curr.name,
        year: curr.year,
        area: curr.area,
        symbols: [{ name: curr.symbol_name, url: curr.symbol_url }],
        logo: curr.logo,
      });
    } else {
      result.symbols.push({ name: curr.symbol_name, url: curr.symbol_url });
    }

    return acc;
  }, new Map());

  return Array.from(resultSet.values()).sort((a, b) =>
    a.key.localeCompare(b.key)
  );
};
