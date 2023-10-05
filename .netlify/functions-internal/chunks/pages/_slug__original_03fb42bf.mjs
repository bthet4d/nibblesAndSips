import { c as createAstro, a as createComponent, r as renderTemplate, e as renderHead, b as renderComponent } from '../astro_d77b23b3.mjs';
import 'clsx';
import { b as $$Footer } from './404_bde3e3c4.mjs';
import { g as getAllPosts, a as getPostBySlug } from './__3284b77f.mjs';
import 'html-escaper';
/* empty css                                                        */import 'dayjs';
/* empty css                           */import '@cosmicjs/sdk';

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
async function getStaticPaths({ paginate }) {
  const allPosts = await getAllPosts();
  const sortedPosts = allPosts.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());
  return sortedPosts.map((post) => ({
    params: { slug: post.slug }
  }));
}
async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post
    }
  };
}
const $$slugOriginal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugOriginal;
  const { post } = Astro2.params;
  console.log("Post on blog/slug page: ", post);
  if (!post) {
    console.log("No post found");
    let post2 = await getPostBySlug(Astro2.url.pathname.split("/").pop());
    console.log("Post set from slug: ", post2);
  }
  return renderTemplate`<!-- if not post --><html lang="en"><head><!-- <BaseHead title={post.title} description={post.slug} /> -->${renderHead()}</head><body class="bg-white text-black font-body leading-normal personality-casual"><!-- <Nav /> --><main class="py-12 lg:py-20"><article class="max-w-6xl mx-auto px-3"><!-- <HomeHeader title={post.title} description={post.slug} /> --><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-test="articles-section"><!-- {if (!post.data) }
          <div>Loading...</div>
        {else}
          {post.data.map(p => <div class="col-span-1">
            <Card post={p} />
          </div>)}
        {/if} --></section></article></main><!-- <Paginator page={post} /> -->${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[slug]_original.astro", void 0);

const $$file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[slug]_original.astro";
const $$url = "/posts/[slug]_original";

export { $$slugOriginal as default, $$file as file, getStaticPaths, getStaticProps, $$url as url };
