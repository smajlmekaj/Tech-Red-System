import styled from '@emotion/styled';
import React from 'react';
import Carousels from './carousel';
import Footer from './footer';
import Leftside from './leftside';
import Main from './main';
import Numbers from './numbers';
import Subscribe from './subscribe';

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <>
      <TopWrapper>
        <div>
          <Leftside />
        </div>
        <Main />
      </TopWrapper>
      <Carousels />
      <Numbers />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
