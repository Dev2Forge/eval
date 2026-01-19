import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Playground = lazy(() => import('../pages/Playground'));

export const routesLayoutDefault = [{ path: '/', page: Home }];

export const routesLayoutWithoutTitle = [{ path: '/playground', page: Playground }];

const routes = [...routesLayoutDefault, ...routesLayoutWithoutTitle];

export default routes;
