export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/404_bde3e3c4.mjs').then(n => n._);

export { page };
