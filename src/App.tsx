import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesLayoutDefault, routesLayoutWithoutTitle } from './routes';
import './App.css';
import WithoutHeaderTitle from './layouts/WithoutHeaderLogo';
import LoaderInfinity from './components/Loader';

const DefaultLayout = lazy(() => import('./layouts/default'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    // <Loader />
    <LoaderInfinity />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routesLayoutDefault.map((routes, index) => {
            const { path, page: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<LoaderInfinity />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route element={<WithoutHeaderTitle />}>
          {routesLayoutWithoutTitle.map((routes, index) => {
            const { path, page: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<LoaderInfinity />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
