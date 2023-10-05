import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import nodejs from '@astrojs/node';
import netlify from '@astrojs/netlify/functions';
// import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://3rdCoastNibbles.sipps/",
  output: "hybrid",
  // output: "server",
  adapter: netlify()
  // adapter: nodejs({
  //   mode: 'middleware'
  // })
});