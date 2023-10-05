import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ad4762f5.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_d77b23b3.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_710be423.mjs');
const _page1  = () => import('./chunks/index_7d35518f.mjs');
const _page2  = () => import('./chunks/rss_b730bbd0.mjs');
const _page3  = () => import('./chunks/search_2c591012.mjs');
const _page4  = () => import('./chunks/how-to-compare-dates-in-javascript_50c84980.mjs');
const _page5  = () => import('./chunks/installing-go-on-a-mac_03e319e9.mjs');
const _page6  = () => import('./chunks/introducing-astro_217e0d26.mjs');
const _page7  = () => import('./chunks/_slug__original_94e968b2.mjs');
const _page8  = () => import('./chunks/_slug__7e082910.mjs');
const _page9  = () => import('./chunks/_.._dfc69736.mjs');
const _page10  = () => import('./chunks/404_19c46d1d.mjs');const pageMap = new Map([["../../../../../../../../../home/bthetford/.nvm/versions/node/v20.5.0/lib/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/search.astro", _page3],["src/pages/posts/how-to-compare-dates-in-javascript.md", _page4],["src/pages/posts/installing-go-on-a-mac.md", _page5],["src/pages/posts/introducing-astro.md", _page6],["src/pages/posts/[slug]_original.astro", _page7],["src/pages/posts/[slug].astro", _page8],["src/pages/posts/[...page].astro", _page9],["src/pages/404.astro", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
