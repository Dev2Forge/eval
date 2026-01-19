import { Suspense, lazy, useEffect, useState } from 'react';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

// import Loader from './common/Loader';
import { routesLayoutDefault, routesLayoutWithoutTitle } from './routes';
import './App.css';
import WithoutHeaderTitle from './layouts/WithoutHeaderLogo';

const DefaultLayout = lazy(() => import('./layouts/default'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    // <Loader />
    <div>Loading...</div>
  ) : (
    <>
      {/* <Toaster position="top-right" reverseOrder={false} containerClassName="overflow-auto" /> */}
      <Routes>
        <Route element={<DefaultLayout />}>
          {routesLayoutDefault.map((routes, index) => {
            const { path, page: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  // <Suspense fallback={<Loader />}>
                  <Suspense fallback={<div>Loading...</div>}>
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
                  // <Suspense fallback={<Loader />}>
                  <Suspense fallback={<div>Loading...</div>}>
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
