import { query } from './query';

export const runtime = 'edge';

export async function GET() {
  const results = await query();

  return Response.json(results);
}
