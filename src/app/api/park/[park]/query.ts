import { getRequestContext } from '@cloudflare/next-on-pages';
import { z } from 'zod';

import { Park } from '@/model';

const resultParkSchema = z.object({
  key: z.string(),
  name: z.string(),
  year: z.number(),
  area: z.number(),
  logo: z.string(),
  position_x: z.number(),
  position_y: z.number(),
  symbol_name: z.string(),
  symbol_url: z.string().nullable(),
});

const resultParksSchema = z.array(resultParkSchema).min(1);

const resultPictureSchema = z.object({
  src: z.string(),
  source: z.string(),
  caption: z.string(),
});

const resultPicturesSchema = z
  .array(resultPictureSchema)
  .min(1)
  .transform((pictures) => ({
    background: pictures[0],
    pictures: pictures.slice(1),
  }));

export const query = async (parkKey: string): Promise<Park> => {
  const { env } = getRequestContext();

  const d1ParksResult = await env.DB.prepare(
    `
    SELECT p.*, s.name as symbol_name, s.url as symbol_url, ps.x as position_x, ps.y as position_y FROM park p 
    LEFT JOIN symbol s ON p.key = s.park_key 
    LEFT JOIN position ps ON p.key = ps.park_key 
    WHERE p.key = ?
    ORDER BY s.id
  `
  )
    .bind(parkKey)
    .all();
  const parks = resultParksSchema.parse(d1ParksResult.results);
  const { key, name, year, area, logo, position_x, position_y } = parks[0];

  const d1PicturesResult = await env.DB.prepare(
    `
    SELECT * FROM picture p
    WHERE p.park_key = ?
    ORDER BY p.type
  `
  )
    .bind(parkKey)
    .all();

  const { background, pictures } = resultPicturesSchema.parse(d1PicturesResult.results);

  return {
    key,
    name,
    year,
    area,
    logo,
    position: {
      x: position_x,
      y: position_y,
    },
    symbols: parks.map(({ symbol_name, symbol_url }) => ({
      name: symbol_name,
      url: symbol_url,
    })),
    background,
    pictures,
  };
};
