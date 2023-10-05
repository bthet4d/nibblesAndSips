import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, e as renderHead } from '../astro_d77b23b3.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from './404_bde3e3c4.mjs';
import { g as getAllPosts, $ as $$HomeHeader, b as $$Card } from './__3284b77f.mjs';
import 'html-escaper';
/* empty css                                                        */import 'dayjs';
/* empty css                           */import '@cosmicjs/sdk';

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
function onMount() {
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Nibbles & Sipps";
  const description = "A foodie blog serving up the Texas Gulf Coast. We focus on the best food and drink in the Corpus Christi area.";
  const seoDescription = "Food and drink blog Texas Gulf Coast Corpus Christi area.";
  const allPosts = await getAllPosts();
  const sortedPosts = allPosts.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": seoDescription })}${renderHead()}</head><body class="bg-white text-black font-body leading-normal personality-casual">${renderComponent($$result, "Nav", $$Nav, {})}<main class="py-12 lg:py-20"><article class="max-w-6xl mx-auto px-3">${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": title, "description": description })}<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section">${sortedPosts.map((p) => renderTemplate`<div class="col-span-1">${renderComponent($$result, "Card", $$Card, { "post": p })}</div>`)}</section></article></main><section class="flex space-x-8 justify-center text-xl pt-8 font-bold"><a href="/posts" class="mr-8" data-test="see-all-link">
See All<span class="squiggle">&rarr;</span></a></section>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/index.astro", void 0);

const $$file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, onMount, $$url as url };
