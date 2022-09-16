import styled from '@emotion/styled';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';

const Wrapper = styled.div`
  margin: 100px 0;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 30px 30px rgb(200, 0, 0);
  animation-name: shadow;
  h1 {
    text-shadow: 1px 1px 3px white;
    color: rgba(200, 0, 0);
  }
  p {
    text-shadow: 1px 1px 3px white;
    color: rgba(200, 0, 0);
  }
`;

const Numbers = () => {
  return (
    <Wrapper>
      <Grid2
        container
        alignItems="center"
        spacing={2}
        sx={{ textAlign: 'center' }}
      >
        <Grid2 md={3} xs={6}>
          <h1>800B+</h1>
          <p>Investment Money</p>
        </Grid2>
        <Grid2 md={3} xs={6}>
          <h1>8,000,000+</h1>
          <p>World Wide Workers</p>
        </Grid2>
        <Grid2 md={3} xs={6}>
          <h1>2M+</h1>
          <p>Sales. Only for the Best</p>
        </Grid2>
        <Grid2 md={3} xs={6}>
          <h1>50+</h1>
          <p>Bilion Class Partners</p>
        </Grid2>
      </Grid2>
    </Wrapper>
  );
};

export default Numbers;
