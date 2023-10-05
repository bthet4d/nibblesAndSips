import { isRemotePath, joinPaths } from '@astrojs/internal-helpers/path';
import { A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, f as ExpectedImageOptions, I as InvalidImageService, c as createAstro, a as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, b as renderComponent, e as renderHead, u as unescapeHTML } from '../astro_d77b23b3.mjs';
import 'clsx';
import { $ as $$BaseHead, a as $$Nav, b as $$Footer } from './404_bde3e3c4.mjs';
import { g as getAllPosts, $ as $$HomeHeader } from './__3284b77f.mjs';
import { marked } from 'marked';
import { createClient } from '@supabase/supabase-js';

const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const baseService = {
  validateOptions(options) {
    if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(
          JSON.stringify(options.src),
          typeof options.src,
          JSON.stringify(options, (_, v) => v === void 0 ? null : v)
        )
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
    }
    if (!options.format) {
      options.format = "webp";
    }
    return options;
  },
  getHTMLAttributes(options) {
    let targetWidth = options.width;
    let targetHeight = options.height;
    if (isESMImportedImage(options.src)) {
      const aspectRatio = options.src.width / options.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = options.src.width;
        targetHeight = options.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", "/_image");
    return `${imageEndpoint}?${searchParams}`;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q")
    };
    return transform;
  }
};

function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!allowWildcard || !pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}

function isESMImportedImage(src) {
  return typeof src === "object";
}
function isRemoteImage(src) {
  return typeof src === "string";
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src))
    return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../sharp_ec86027b.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && // If `getURL` returned the same URL as the user provided, it means the service doesn't need to do anything
  !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions);
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    attributes: service.getHTMLAttributes !== void 0 ? service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$2 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/node_modules/astro/components/Image.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const DB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51a2d5bXp5bWlteW5hd21id2xpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNDY5NDksImV4cCI6MjAwOTYyMjk0OX0.MxhitnVsPoTa414MrsAeSuYZxmM6ZP0E3rRl9m4vFko";
const DB_URL = "https://nukgymzymimynawmbwli.supabase.co";

const supabase = createClient(
    DB_URL, 
    DB_KEY,
    {
        auth: {
        persistSession: false,
        }
    }
);

const $$Astro$1 = createAstro("https://3rdCoastNibbles.sipps/");
const $$Comments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Comments;
  let post = Astro2.props;
  let postHasComments = false;
  const { data, error } = await supabase.from("comments").select().eq("slug", post.slug);
  if (Astro2.request.method === "POST") {
    console.log("POST request");
    try {
      const formData = await Astro2.request.formData();
      console.log("Astro form Data:", formData);
    } catch (error2) {
      console.log("Error getting form data", error2);
    }
  }
  if (error) {
    console.log("Error fetching comments", error);
  } else {
    console.log("Comments", data);
    if (data.length > 0) {
      postHasComments = true;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto my-4 max-w-md"><form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="comment-form" method="POST"><div class="mb-4"><label class="block text-gray-700 font-bold mb-2" for="name">
Name
</label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user-name" type="text" placeholder="Enter your name"></div><div class="mb-6"><label class="block text-gray-700 font-bold mb-2" for="comment">
Comment
</label><textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" placeholder="Enter your comment"></textarea></div><div class="flex items-center justify-center"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
Submit
</button></div></form><div class="flex flex-col"><h2 class="text-2xl font-bold mb-4">Comments</h2>${postHasComments ? renderTemplate`<p>Show Comments</p>` : renderTemplate`<p>No Comments</p>`}</div></div>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/components/Comments.astro", void 0);

const $$Astro = createAstro("https://3rdCoastNibbles.sipps/");
async function getStaticPaths() {
  const data = await getAllPosts() || [];
  return data.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  let pageTitle = post.title;
  let pageDescription = post.metadata.excerpt;
  let seoTitle = "3rd Coast Nibbles & Sipps - " + post.title;
  let seoDescription = post.slug;
  let content = marked.parse(post.metadata.content);
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": seoTitle, "description": seoDescription })}${renderHead()}</head><body class="bg-white text-black font-body leading-normal personality-casual">${renderComponent($$result, "Nav", $$Nav, {})}<main class="py-12 lg:py-20"><article class="max-w-6xl mx-auto px-3">${renderComponent($$result, "HomeHeader", $$HomeHeader, { "title": pageTitle, "description": pageDescription })}<article class="border-b pb-8"><!-- <h1 class="text-4xl font-bold">{post.title}</h1> --><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-8" data-test="articles-section"><div class="my-8 float-left">${unescapeHTML(content)}</div><div class="my-8 float-right">${renderComponent($$result, "Image", $$Image, { "src": post.metadata.cover_image.url, "alt": "", "width": "300", "height": "300", "class": "rounded-lg shadow-lg float-right" })}</div></section></article></article></main><!-- <Utterances /> -->${renderComponent($$result, "Comments", $$Comments, { "post": post })}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[slug].astro", void 0);

const $$file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, baseService as b, imageConfig as i, parseQuality as p };
