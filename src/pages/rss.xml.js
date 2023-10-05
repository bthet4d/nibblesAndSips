import rss from "@astrojs/rss";
import { getAllPosts } from '../../src/lib/cosmic.js';

const allPosts = await getAllPosts();
const sortedPosts = allPosts.sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());

export const get = () =>
  rss({
    title: "3rd Coast Nibbles & Sipps",
    description: "A blog about the best food and drinks in the Texas Coastal Bend.",
    site: import.meta.env.SITE,
    items: sortedPosts,
  });


