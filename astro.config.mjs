import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  server: {
    host: true,
  },
  integrations: [react(), tailwind({ config: { applyBaseStyles: true } })],
});

// https://astro.build/config
