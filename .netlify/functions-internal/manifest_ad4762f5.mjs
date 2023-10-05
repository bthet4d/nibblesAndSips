import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_d77b23b3.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../../../../../../../home/bthetford/.nvm/versions/node/v20.5.0/lib/node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.9f22ed3f.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"},{"type":"inline","content":"img[data-astro-cid-dohjnao5]{width:100%;aspect-ratio:15/7;-o-object-fit:cover;object-fit:cover}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.872b5133.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"}],"routeData":{"route":"/search","type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6096ba31.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"}],"routeData":{"route":"/posts/how-to-compare-dates-in-javascript","type":"page","pattern":"^\\/posts\\/how-to-compare-dates-in-javascript\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"how-to-compare-dates-in-javascript","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/how-to-compare-dates-in-javascript.md","pathname":"/posts/how-to-compare-dates-in-javascript","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6096ba31.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"}],"routeData":{"route":"/posts/installing-go-on-a-mac","type":"page","pattern":"^\\/posts\\/installing-go-on-a-mac\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"installing-go-on-a-mac","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/installing-go-on-a-mac.md","pathname":"/posts/installing-go-on-a-mac","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6096ba31.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"}],"routeData":{"route":"/posts/introducing-astro","type":"page","pattern":"^\\/posts\\/introducing-astro\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"introducing-astro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/introducing-astro.md","pathname":"/posts/introducing-astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6504fabb.js"}],"styles":[],"routeData":{"route":"/posts/[slug]","type":"page","pattern":"^\\/posts\\/([^/]+?)_original\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false},{"content":"_original","dynamic":false,"spread":false}]],"params":["slug"],"component":"src/pages/posts/[slug]_original.astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.c1f51cdb.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"}],"routeData":{"route":"/posts/[slug]","type":"page","pattern":"^\\/posts\\/([^/]+?)\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/posts/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.9f22ed3f.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"},{"type":"inline","content":"img[data-astro-cid-dohjnao5]{width:100%;aspect-ratio:15/7;-o-object-fit:cover;object-fit:cover}\n"}],"routeData":{"route":"/posts/[...page]","type":"page","pattern":"^\\/posts(?:\\/(.*?))?\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/posts/[...page].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.9f22ed3f.js"}],"styles":[{"type":"external","src":"/_astro/how-to-compare-dates-in-javascript.428b014a.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://3rdCoastNibbles.sipps/","base":"/","compressHTML":true,"componentMetadata":[["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[...page].astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[slug].astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/[slug]_original.astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/how-to-compare-dates-in-javascript.md",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/installing-go-on-a-mac.md",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/introducing-astro.md",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/search.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/posts/[slug]_original.astro":"chunks/pages/_slug__original_03fb42bf.mjs","/../../../../../../../../../home/bthetford/.nvm/versions/node/v20.5.0/lib/node_modules/astro/dist/assets/image-endpoint.js":"chunks/pages/image-endpoint_31d4b55f.mjs","/src/pages/index.astro":"chunks/pages/index_052bf0d9.mjs","/src/pages/posts/installing-go-on-a-mac.md":"chunks/pages/installing-go-on-a-mac_ca00fbf5.mjs","/src/pages/posts/introducing-astro.md":"chunks/pages/introducing-astro_d784c0b1.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_201a4798.mjs","/src/pages/search.astro":"chunks/pages/search_98bb233e.mjs","\u0000@astrojs-manifest":"manifest_ad4762f5.mjs","\u0000@astro-page:../../../../../../../../../home/bthetford/.nvm/versions/node/v20.5.0/lib/node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_710be423.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_7d35518f.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_b730bbd0.mjs","\u0000@astro-page:src/pages/search@_@astro":"chunks/search_2c591012.mjs","\u0000@astro-page:src/pages/posts/how-to-compare-dates-in-javascript@_@md":"chunks/how-to-compare-dates-in-javascript_50c84980.mjs","\u0000@astro-page:src/pages/posts/installing-go-on-a-mac@_@md":"chunks/installing-go-on-a-mac_03e319e9.mjs","\u0000@astro-page:src/pages/posts/introducing-astro@_@md":"chunks/introducing-astro_217e0d26.mjs","\u0000@astro-page:src/pages/posts/[slug]_original@_@astro":"chunks/_slug__original_94e968b2.mjs","\u0000@astro-page:src/pages/posts/[slug]@_@astro":"chunks/_slug__7e082910.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"chunks/_.._dfc69736.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_19c46d1d.mjs","/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ec86027b.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.9f22ed3f.js","/astro/hoisted.js?q=4":"_astro/hoisted.6096ba31.js","/astro/hoisted.js?q=3":"_astro/hoisted.872b5133.js","/astro/hoisted.js?q=2":"_astro/hoisted.6504fabb.js","/astro/hoisted.js?q=1":"_astro/hoisted.c1f51cdb.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/how-to-compare-dates-in-javascript.428b014a.css","/_astro/index.e287ec15.css","/robots.txt","/search-index.json","/_astro/hoisted.6096ba31.js","/_astro/hoisted.6504fabb.js","/_astro/hoisted.872b5133.js","/_astro/hoisted.9f22ed3f.js","/_astro/hoisted.c1f51cdb.js","/images/Golang-Basics.png","/images/creek.png","/images/favicon.ico","/images/introducing-astro.jpg","/images/javascript-logo-banner.jpg","/images/social.jpg"]});

export { manifest };
