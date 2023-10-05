import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderSlot, b as renderComponent, e as renderHead, i as createComponent$1, j as spreadAttributes, k as renderTemplate$1, l as renderComponent$1, n as unescapeHTML } from '../astro_d77b23b3.mjs';
import { $ as $$BaseHead, a as $$Nav } from './404_bde3e3c4.mjs';
import 'clsx';
import '@astrojs/internal-helpers/path';
import './_slug__b5f15030.mjs';

const $$Astro$2 = createAstro("https://3rdCoastNibbles.sipps/");
const $$EmailSignup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EmailSignup;
  return renderTemplate`${maybeRenderHead()}<aside class="text-center py-16 max-w-3xl mx-auto"><div class="w-full border-t-2 mb-8 border-black squiggle"></div><h3 class="font-display text-4xl uppercase font-bold leading-none">Subscribe to the newsletter</h3><form class="mt-8 flex flex-wrap items-center md:w-2/3 mx-auto"><input name="email" class="w-full flex-1 bg-gray-200 py-3 px-6 rounded" type="email" placeholder="Your email" required data-test="subscribe-input"><button class="bg-blue-500 md:ml-3 mt-3 md:mt-0 w-full md:w-auto text-white py-3 px-6 rounded hover:squiggle" type="submit" data-test="subscribe-submit-btn">Subscribe</button></form><div class="w-full border-b-2 pt-12 border-black squiggle"></div></aside>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Subscribe/EmailSignup.astro", void 0);

const $$Astro$1 = createAstro("https://3rdCoastNibbles.sipps/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, date, hero, youtube } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="max-w-5xl mx-auto px-3"><header class="mx-auto max-w-3xl text-center content"><h1>${title}</h1></header><!-- Image -->${hero && renderTemplate`<img class="rounded-xl mx-auto" style="min-width: 80%;" loading="lazy"${addAttribute(hero, "src")}${addAttribute(title, "alt")}>`}<!-- YouTube Video -->${youtube && renderTemplate`<div class="embed-responsive aspect-ratio-16/9 mt-6 lg:mt-12"><iframe width="700" height="500" class="embed-responsive-item"${addAttribute(`https://www.youtube.com/embed/${youtube}`, "src")} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe></div>`}<!-- Content --><section class="max-w-3xl mx-auto py-6 lg:py-12 content">${renderSlot($$result, $$slots["default"])}</section>${renderComponent($$result, "EmailSignup", $$EmailSignup, {})}</article>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { content } = Astro2.props;
  const { title, description, date, hero, youtube } = content;
  return renderTemplate`<html${addAttribute(content.lang || "en", "lang")}><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head><body>${renderComponent($$result, "Nav", $$Nav, {})}<main class="py-12 lg:py-20">${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "hero": hero, "date": date, "youtube": youtube }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}</main></body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/layouts/BlogPostLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Working with dates in JavaScript can be tricky to say the least. Recently I needed to compare two dates with one another to see which was greater than, less than, etc.</p>\n<p>In my particular use case, I was using a date-picker that was returning a string like <code>01/28/2020</code>. I needed to see if this date was <code>>=</code> to the current day.</p>\n<p>The first thing I needed to do was convert this string into a JavaScript Date Object.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">date</span><span style=\"color: #F97583\">:</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"01/28/2020\"</span><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(date);</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\">// Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)</span></span></code></pre>\n<p>Then, compare this date with the current day:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">compareDate</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"01/28/2020\"</span><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">today</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">();</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(compareDate </span><span style=\"color: #F97583\">>=</span><span style=\"color: #E1E4E8\"> today);</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\">// false</span></span></code></pre>\n<p>The issue is that even though the dates are the same, the times are not.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">compareDate</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"01/28/2020\"</span><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">today</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">();</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"compareDate: \"</span><span style=\"color: #E1E4E8\">, compareDate);</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"today: \"</span><span style=\"color: #E1E4E8\">, today);</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\">// compareDate:  Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\">// today:  Tue Jan 28 2020 21:33:27 GMT-0500 (Eastern Standard Time)</span></span></code></pre>\n<p>Notice how <code>compareDate</code> has all zero’s for time. The difference in time is the reason why this comparison fails. To fix this, we need to create the current day without time. We do this by instantiating a new JS Date object by individually passing in the year, month and day.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">todayWithoutTime</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">().</span><span style=\"color: #B392F0\">getFullYear</span><span style=\"color: #E1E4E8\">(),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">().</span><span style=\"color: #B392F0\">getMonth</span><span style=\"color: #E1E4E8\">(),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">().</span><span style=\"color: #B392F0\">getDate</span><span style=\"color: #E1E4E8\">()</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"todayWithoutTime: \"</span><span style=\"color: #E1E4E8\">, todayWithoutTime);</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\">// todayWithoutTime:  Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)</span></span></code></pre>\n<p>So let’s try our comparison again.</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">compareDate</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"01/28/2020\"</span><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">todayWithoutTime</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">().</span><span style=\"color: #B392F0\">getFullYear</span><span style=\"color: #E1E4E8\">(),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">().</span><span style=\"color: #B392F0\">getMonth</span><span style=\"color: #E1E4E8\">(),</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">  </span><span style=\"color: #F97583\">new</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">Date</span><span style=\"color: #E1E4E8\">().</span><span style=\"color: #B392F0\">getDate</span><span style=\"color: #E1E4E8\">()</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">console.</span><span style=\"color: #B392F0\">log</span><span style=\"color: #E1E4E8\">(compareDate </span><span style=\"color: #F97583\">>=</span><span style=\"color: #E1E4E8\"> todayWithoutTime);</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\">// true</span></span></code></pre>\n<p>That’s it. Just remember that when comparing dates in JavaScript it is vital to factor in the time. 😎</p>");

				const frontmatter = {"title":"How to compare dates in JavaScript","pubDate":"2020-01-28","slug":"how-to-compare-dates-in-javascript","description":"How to compare dates in JavaScript natively using the Date Object, without using any third-party libraries.","hero":"/images/javascript-logo-banner.jpg","tags":["javascript"],"layout":"../../layouts/BlogPostLayout.astro"};
				const file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/how-to-compare-dates-in-javascript.md";
				const url = "/posts/how-to-compare-dates-in-javascript";
				function rawContent() {
					return "\nWorking with dates in JavaScript can be tricky to say the least. Recently I needed to compare two dates with one another to see which was greater than, less than, etc.\n\nIn my particular use case, I was using a date-picker that was returning a string like `01/28/2020`. I needed to see if this date was `>=` to the current day.\n\nThe first thing I needed to do was convert this string into a JavaScript Date Object.\n\n```js\nconst date: new Date(\"01/28/2020\");\nconsole.log(date);\n// Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)\n```\n\nThen, compare this date with the current day:\n\n```js\nconst compareDate = new Date(\"01/28/2020\");\nconst today = new Date();\nconsole.log(compareDate >= today);\n// false\n```\n\nThe issue is that even though the dates are the same, the times are not.\n\n```js\nconst compareDate = new Date(\"01/28/2020\");\nconst today = new Date();\nconsole.log(\"compareDate: \", compareDate);\nconsole.log(\"today: \", today);\n// compareDate:  Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)\n// today:  Tue Jan 28 2020 21:33:27 GMT-0500 (Eastern Standard Time)\n```\n\nNotice how `compareDate` has all zero's for time. The difference in time is the reason why this comparison fails. To fix this, we need to create the current day without time. We do this by instantiating a new JS Date object by individually passing in the year, month and day.\n\n```js\nconst todayWithoutTime = new Date(\n  new Date().getFullYear(),\n  new Date().getMonth(),\n  new Date().getDate()\n);\nconsole.log(\"todayWithoutTime: \", todayWithoutTime);\n// todayWithoutTime:  Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)\n```\n\nSo let's try our comparison again.\n\n```js\nconst compareDate = new Date(\"01/28/2020\");\nconst todayWithoutTime = new Date(\n  new Date().getFullYear(),\n  new Date().getMonth(),\n  new Date().getDate()\n);\nconsole.log(compareDate >= todayWithoutTime);\n// true\n```\n\nThat's it. Just remember that when comparing dates in JavaScript it is vital to factor in the time. 😎\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent$1((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate$1`${renderComponent$1(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate$1`${unescapeHTML(html)}`
							})}`;
				});

const howToCompareDatesInJavascript = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPostLayout as $, howToCompareDatesInJavascript as h };
