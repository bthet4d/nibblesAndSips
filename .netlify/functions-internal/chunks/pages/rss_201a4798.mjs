import rss from '@astrojs/rss';
import { g as getAllPosts } from './__3284b77f.mjs';
import '../astro_d77b23b3.mjs';
import 'clsx';
import 'html-escaper';
import './404_bde3e3c4.mjs';
/* empty css                                                        */import 'dayjs';
/* empty css                           */import '@cosmicjs/sdk';

const allPosts = await getAllPosts();
const sortedPosts = allPosts.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());

const get = () =>
  rss({
    title: "3rd Coast Nibbles & Sipps",
    description: "A blog about the best food and drinks in the Texas Coastal Bend.",
    site: "https://3rdCoastNibbles.sipps/",
    items: sortedPosts,
  });

export { get };
