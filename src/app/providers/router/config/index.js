import { layouts } from '../ui';

export const config = [
  {
    path: '/characters',
    name: 'characters',
    component: () => import('@/pages/CharactersPage.vue'),
    meta: {
      layout: layouts.DEFAULT,
      transition: 'slide-left'
    },
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: () => import('@/pages/CharacterDetailsPage.vue'),
    meta: {
      layout: layouts.DEFAULT,
      transition: 'slide-right'
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import('@/pages/ErrorPage.vue'),
    meta: {
      layout: layouts.ERROR
    }
  }
];