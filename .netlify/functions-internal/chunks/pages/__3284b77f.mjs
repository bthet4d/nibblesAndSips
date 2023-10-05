import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderHead } from '../astro_d77b23b3.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from './404_bde3e3c4.mjs';
import dayjs from 'dayjs';
/* empty css                           */import { createBucketClient } from '@cosmicjs/sdk';

const $$Astro$3 = createAstro("https://3rdCoastNibbles.sipps/");
const $$HomeHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HomeHeader;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto max-w-xl text-center content"><h2 class="mb-4" data-test="header-title">${title}</h2><p data-test="header-description">${description}</p></header>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/HomeHeader.astro", void 0);

const $$Astro$2 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  post.url = `/posts/${post.slug}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(post.url, "href")}${addAttribute(post.slug, "data-slug")} class="transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden" data-test="article-card" data-astro-cid-dohjnao5><img class="squiggle"${addAttribute(post.metadata.cover_image.url, "src")}${addAttribute(post.title, "alt")} width="360" height="192" data-astro-cid-dohjnao5><div class="py-6 px-8" data-astro-cid-dohjnao5><h2 class="font-bold text-2xl leading-tight" data-astro-cid-dohjnao5>${post.title}</h2><p class="text-xs text-gray-600 mt-4 flex items-center" data-astro-cid-dohjnao5>${dayjs(post.created_at).format("MM-DD-YYYY")}</p></div></a>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Card.astro", void 0);

const BUCKET_SLUG = "3rdcoastnibblesandsipps-blog";
const READ_KEY = "JoIPqflFvJOJ1NsIspk0K5Jdt0zzwoWkNLbYQxqYoiVPOSk2Ck";

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY
});

async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .depth(2);
  return data.objects
}

const getPostBySlug = async (slug) => {
  const params = {
    type: 'posts',
    'metadata.slug': slug,
  };
  const { objects } = await bucket.getObjects(params);
  if (objects.length > 0) {
    return objects[0];
  } else {
    return null;
  }
};

const $$Astro$1 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Paginator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex space-x-8 justify-center text-xl pt-16 font-bold">${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="mr-8" data-test="paginator-prev"><span class="squiggle">&larr;</span> Prev
</a>`}${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} data-test="paginator-next">
Next<span class="squiggle">&rarr;</span></a>`}</section>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Paginator.astro", void 0);

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
async function getStaticPaths({ paginate }) {
  const allPosts = await getAllPosts();
  const sortedPosts = allPosts.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());
  return paginate(sortedPosts, {
    pageSize: 21
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  let pageTitle = "Articles";
  let pageDescription = `page ${page.currentPage} of all articles`;
  let seoTitle = "Articles | 3rd Coast Nibbles & Sipps";
  let seoDescription = "";
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": seoTitle, "description": seoDescription })}${renderHead()}</head><body class="bg-white text-black font-body leading-normal personality-casual">${renderComponent($$result, "Nav", $$Nav, {})}<main class="py-12 lg:py-20"><article class="max-w-6xl mx-auto px-3">${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": pageTitle, "description": pageDescription })}<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section">${page.data.map((p) => renderTemplate`<div class="col-span-1">${renderComponent($$result, "Card", $$Card, { "post": p })}</div>`)}</section></article></main>${renderComponent($$result, "Paginator", $$Paginator, { "page": page })}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[...page].astro", void 0);

const $$file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HomeHeader as $, ____page_ as _, getPostBySlug as a, $$Card as b, getAllPosts as g };
