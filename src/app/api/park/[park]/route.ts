import { query } from './query';

export const runtime = 'edge';

export async function GET(_: Request, { params }: { params: Promise<{ park: string }> }) {
  const park = (await params).park;
  const results = await query(park);

  return Response.json(results);
}
