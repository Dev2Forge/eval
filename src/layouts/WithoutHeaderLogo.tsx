import React from 'react';
import GithubButtons from '../components/GithubButtons';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const WithoutHeaderTitle: React.FC = () => {
  return (
    <>
      <Header>
        <div className="w-full grid grid-cols-2">
          <div className="col">
            <img src="./src/assets/images/svg/favicon.svg" width="50px" alt="Dev2Forge Eval Logo" />
          </div>
          <GithubButtons />
        </div>
      </Header>

      <MainContainer>
        <Outlet />
      </MainContainer>

      <Footer />
    </>
  );
};

export default WithoutHeaderTitle;
