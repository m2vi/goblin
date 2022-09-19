import type { APIContext } from 'astro';
import config from '../../config/common.json';

export async function get({}: APIContext) {
  return {
    body: JSON.stringify(config),
  };
}
