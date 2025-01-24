export const layouts = {
  DEFAULT: { name: 'DEFAULT', component: () => import('./layouts/Default.vue') },
  ERROR: { name: 'ERROR', component: () => import('./layouts/Error.vue') }
};