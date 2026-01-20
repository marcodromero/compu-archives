import { lazy } from 'react';

const Home = lazy(() => import('./features/home'));
const Catalog = lazy(() => import('./features/catalog'));
const Guestbook = lazy(() => import('./features/guestbook'));
const About = lazy(() => import('./features/about'));
const Sources = lazy(() => import('./features/sources'));
const CD = lazy(() => import('./features/cd'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/revistas', element: <Catalog /> },
  { path: '/comentarios', element: <Guestbook /> },
  { path: '/acerca', element: <About /> },
  { path: '/fuentes', element: <Sources /> },
  { path: '/cd/:code', element: <CD /> },
];
