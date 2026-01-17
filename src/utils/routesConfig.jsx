import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Guestbook = lazy(() => import('../pages/Guestbook'));
const About = lazy(() => import('../pages/About'));
const Sources = lazy(() => import('../pages/Sources'));
const CD = lazy(() => import('../pages/CD'));

export const routes = [
  { path:"/", element: <Home />},
  { path:"/revistas", element:<Catalog />},
  { path:"/comentarios", element:<Guestbook />},
  { path:"/acerca", element:<About />},
  { path:"/fuentes", element:<Sources />},
  { path:"/cd/:code", element:<CD />}
];