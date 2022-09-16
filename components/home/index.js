import styled from '@emotion/styled';
import React from 'react';
import Carousels from './carousel';
import Leftside from './leftside';
import Main from './main';

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
    </>
  );
};

export default Home;
