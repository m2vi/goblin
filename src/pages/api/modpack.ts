import type { APIContext } from 'astro';
import fs from 'fs-extra';
import path from 'path';

export async function get({}: APIContext) {
  const buffer = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'modpack.zip'));

  return {
    body: buffer,
  };
}
