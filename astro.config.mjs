// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://supercompany31123-spec.github.io/sapporo-trip',
  base: '/sapporo-trip',
  build: {
    outDir: 'dist'
  }
});
