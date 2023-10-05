import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as addAttribute, m as maybeRenderHead, e as renderHead } from '../astro_d77b23b3.mjs';
import 'clsx';
/* empty css                                                        */
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://3rdCoastNibbles.sipps/");
const $$GoogleAnalytics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-87340191-1"><\/script>'])));
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Head/GoogleAnalytics.astro", void 0);

const $$Astro$5 = createAstro("https://3rdCoastNibbles.sipps/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {})}<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="sitemap" href="/sitemap.xml"><link rel="icon" type="image/x-icon" href="/images/favicon.ico"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><!-- <meta property="og:url" content={permalink} /> --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="/images/social.jpg"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><!-- <meta property="twitter:url" content={permalink} /> --><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image" content="/images/social.jpg"><!-- Prism CSS --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-tomorrow.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.css"><!-- Fonts --><link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&family=Poppins:ital,wght@0,400;0,600;1,400;1,700&display=swap" rel="stylesheet">`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Head/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav><div class="max-w-5xl mx-auto px-3 py-3 flex items-center justify-between h-16"><a href="/" class="font-bold text-xl hover:text-hot-pink">3rd Coast Nibbles and Sipps</a><a href="/search" class=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></a></div><div class="w-full border-b-2 border-black squiggle"></div></nav>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Nav.astro", void 0);

const $$Astro$3 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Squiggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Squiggle;
  return renderTemplate`<!--This SVG filter is used to "squigglify" HTML elements with the .squiggle class -->${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0" width="0"><defs><filter id="squiggle"><feTurbulence type="fractalNoise" id="turbulence" baseFrequency=".05" numOctaves="4"></feTurbulence><feDisplacementMap id="displacement" in="SourceGraphic" scale="4"></feDisplacementMap></filter></defs></svg>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Footer/Squiggle.astro", void 0);

const $$Astro$2 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center mt-4"><a href="#" class="ml-4" aria-label="Twitter" rel="noopener"><svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M23.32,6.44c0.212-0.177,0.241-0.492,0.065-0.704c-0.068-0.082-0.161-0.14-0.265-0.166l-0.79-0.2 c-0.268-0.067-0.431-0.339-0.364-0.606C21.974,4.731,21.986,4.7,22,4.67l0.44-0.89c0.12-0.249,0.015-0.548-0.233-0.668 C22.099,3.06,21.976,3.049,21.86,3.08l-2,0.56c-0.151,0.044-0.314,0.014-0.44-0.08c-0.865-0.649-1.918-1-3-1c-2.761,0-5,2.239-5,5 l0,0v0.36c0.001,0.127-0.094,0.235-0.22,0.25C8.39,8.5,5.7,7.07,2.8,3.73c-0.128-0.142-0.325-0.2-0.51-0.15 C2.124,3.656,2.013,3.817,2,4C1.599,5.645,1.761,7.377,2.46,8.92c0.062,0.123,0.013,0.274-0.11,0.336 C2.303,9.279,2.251,9.288,2.2,9.28L1.08,9.06C0.807,9.016,0.551,9.202,0.507,9.474C0.498,9.533,0.499,9.592,0.51,9.65 c0.175,1.555,1.047,2.945,2.37,3.78c0.124,0.06,0.176,0.21,0.116,0.334c-0.025,0.051-0.065,0.092-0.116,0.116l-0.53,0.21 c-0.256,0.103-0.381,0.394-0.278,0.65c0.005,0.014,0.011,0.027,0.018,0.04c0.595,1.302,1.791,2.229,3.2,2.48 c0.13,0.047,0.197,0.191,0.15,0.32c-0.025,0.07-0.08,0.124-0.15,0.15C3.93,18.292,2.471,18.575,1,18.56 c-0.276-0.055-0.545,0.124-0.6,0.4s0.124,0.545,0.4,0.6l0,0c2.548,1.208,5.321,1.866,8.14,1.93c2.479,0.038,4.915-0.658,7-2 c3.484-2.326,5.571-6.241,5.56-10.43V8.19c0.001-0.147,0.067-0.286,0.18-0.38L23.32,6.44z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></a><a href="#" class="ml-4" aria-label="YouTube" rel="noopener"><svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 16 16" width="16" height="16"><g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M20.06,3.5H3.94C1.764,3.5,0,5.264,0,7.44v9.12c0,2.176,1.764,3.94,3.94,3.94c0,0,0,0,0,0h16.12 c2.176,0,3.94-1.764,3.94-3.94l0,0V7.44C24,5.264,22.236,3.5,20.06,3.5L20.06,3.5z M16.54,12l-6.77,4.36 c-0.232,0.149-0.542,0.082-0.691-0.151C9.028,16.129,9,16.035,9,15.94V7.28c0-0.276,0.225-0.5,0.501-0.499 c0.095,0,0.189,0.028,0.269,0.079l6.77,4.33c0.232,0.15,0.299,0.459,0.149,0.691c-0.038,0.06-0.089,0.11-0.149,0.149V12z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></a><a href="#" class="ml-4" aria-label="Github" rel="noopener"><svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 16 16" width="16" height="16">&gt;<g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M12,0.28C5.373,0.278-0.002,5.649-0.004,12.276c-0.002,5.197,3.342,9.804,8.284,11.414h0.29 c0.551,0.034,1.026-0.385,1.06-0.936c0.003-0.041,0.003-0.083,0-0.124v-0.21c0-0.17,0-0.4,0-1.09c-0.02-0.132-0.092-0.251-0.2-0.33 c-0.118-0.095-0.272-0.132-0.42-0.1c-2.68,0.58-3.25-1.1-3.29-1.21C5.384,18.801,4.784,18.037,4,17.5 c-0.047-0.041-0.097-0.077-0.15-0.11c0.116-0.063,0.249-0.087,0.38-0.07c0.511,0.071,0.948,0.405,1.15,0.88 c0.804,1.4,2.572,1.913,4,1.16c0.15-0.065,0.258-0.2,0.29-0.36c0.038-0.463,0.236-0.897,0.56-1.23 c0.206-0.183,0.225-0.499,0.042-0.706c-0.081-0.091-0.191-0.149-0.312-0.164c-2.37-0.27-4.79-1.1-4.79-5.19 c-0.02-1.027,0.356-2.023,1.05-2.78C6.351,8.786,6.386,8.579,6.31,8.4C6.032,7.624,6.036,6.774,6.32,6 c0.924,0.164,1.791,0.559,2.52,1.15c0.122,0.086,0.277,0.112,0.42,0.07c0.893-0.242,1.814-0.367,2.74-0.37 c0.929,0.001,1.854,0.125,2.75,0.37c0.14,0.039,0.291,0.013,0.41-0.07c0.73-0.589,1.597-0.984,2.52-1.15 c0.272,0.77,0.272,1.61,0,2.38c-0.076,0.179-0.041,0.386,0.09,0.53c0.687,0.75,1.062,1.733,1.05,2.75c0,4.09-2.43,4.91-4.81,5.18 c-0.275,0.029-0.474,0.274-0.446,0.549c0.013,0.129,0.076,0.248,0.176,0.331c0.448,0.463,0.671,1.099,0.61,1.74v3.18 c-0.01,0.317,0.122,0.621,0.36,0.83c0.303,0.227,0.696,0.298,1.06,0.19c6.285-2.103,9.676-8.902,7.573-15.187 C21.71,3.592,17.147,0.296,12,0.28z" stroke="none" fill="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></a><a href="#" class="ml-4" aria-label="Email" rel="noopener"><svg class="h-6 w-6 hover:text-hot-pink" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 16 16" width="16" height="16">&gt;<g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"><path d="M 2.25,4.5h19.5c0.828,0,1.5,0.672,1.5,1.5v12c0,0.828-0.672,1.5-1.5,1.5H2.25c-0.828,0-1.5-0.672-1.5-1.5V6 C0.75,5.172,1.422,4.5,2.25,4.5z " stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 15.687,9.975L19.5,13.5 " stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 8.313,9.975L4.5,13.5 " stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M 22.88,5.014l-9.513,6.56 c-0.823,0.568-1.911,0.568-2.734,0L1.12,5.014" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></a></div>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Footer/Social.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(["", '<footer class="py-6 lg:py-12 text-center"><div class="text-sm" data-test="footer-text">&copy;<script type="text/javascript"> document.write(new Date().getFullYear()); <\/script> Creek</div>', "</footer>", "<!-- Prism JS -->"])), maybeRenderHead(), renderComponent($$result, "Social", $$Social, {}), renderComponent($$result, "Squiggle", $$Squiggle, {}));
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Footer/Footer.astro", void 0);

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  let title = "How To Code";
  let description = "";
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head><body class="bg-white text-black font-body leading-normal personality-casual">${renderComponent($$result, "Nav", $$Nav, {})}<main class="py-12 lg:py-20"><article class="max-w-6xl mx-auto px-3"><header class="mx-auto max-w-3xl text-center content"><h1 class="mb-4">You're up 404 creek</h1><p>Not much to see here but the intro to Dawson's Creek. Don't wait for your life to be over. There are other pages.
            Go find one!</p><div class="embed-responsive aspect-ratio-4/3"><iframe width="700" height="500" class="embed-responsive-item" src="https://www.youtube.com/embed/izpNuTxGIrM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe></div></header></article></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/404.astro", void 0);

const $$file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseHead as $, _404 as _, $$Nav as a, $$Footer as b };
