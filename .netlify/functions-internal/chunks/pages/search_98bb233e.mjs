import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, e as renderHead } from '../astro_d77b23b3.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from './404_bde3e3c4.mjs';
import { $ as $$HomeHeader } from './__3284b77f.mjs';
import 'html-escaper';
/* empty css                                                        */import 'dayjs';
/* empty css                           */import '@cosmicjs/sdk';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://3rdCoastNibbles.sipps/");
const $$SearchInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SearchInput;
  return renderTemplate(_a || (_a = __template(['<script src="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/mark.min.js" integrity="sha512-5CYOlHXGh6QpOFA/TeTylKLWfB3ftPsde7AnmhuitiTX4K5SqCLBeKro6sPS8ilsz1Q4NRx3v8Ko2IBiszzdww==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js" integrity="sha512-4xUl/d6D6THrAnXAwGajXkoWaeMNwEKK4iNfq5DotEbLPAfk6FSxSP3ydNxqDgCw1c/0Z1Jg6L8h2j+++9BZmg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>', `<section class="max-w-3xl mx-auto px-3"><div class="searchBoxContainer"><input type="text" id="searchBox" class="searchBox w-full px-2 py-1" placeholder="Search..." data-test="search-input"></div><!-- Search Results --><div id="searchResults" class="searchResults lg:pl-8"></div><!-- Search JS --><script client:load>
    document.getElementById('searchBox').focus()
  <\/script></section>`])), maybeRenderHead());
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/SearchInput.astro", void 0);

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  let pageTitle = "Search";
  let pageDescription = "Search all Articles";
  let seoTitle = "Search | 3rd Coast Nibbles";
  let seoDescription = "";
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": seoTitle, "description": seoDescription })}${renderHead()}</head><body class="bg-white text-black font-body leading-normal personality-casual">${renderComponent($$result, "Nav", $$Nav, {})}<main class="py-12 lg:py-20"><article class="max-w-6xl mx-auto px-3" content>${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": pageTitle, "description": pageDescription })}${renderComponent($$result, "SearchInput", $$SearchInput, {})}</article></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/search.astro", void 0);

const $$file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
