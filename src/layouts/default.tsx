import React from 'react';
import GithubButtons from '../components/GithubButtons';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { NavLink, Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2">
          <div className="col">
            <img src="./src/assets/images/svg/favicon.svg" width="50px" alt="Dev2Forge Eval Logo" />
          </div>

          <nav className="flex items-center justify-center *:btn *:btn-sm *:focus:outline-none gap-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/playground">Playground</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <GithubButtons classesAditional="lg:flex md:flex sm:flex hidden" />
        </div>
      </Header>

      <MainContainer>
        <Outlet />
      </MainContainer>

      <Footer />
    </>
  );
};

export default DefaultLayout;
