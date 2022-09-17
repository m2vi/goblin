import fs from 'fs-extra';
import path from 'path';

export async function get() {
  const buffer = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'modpack.zip'));

  return {
    body: buffer,
  };
}
