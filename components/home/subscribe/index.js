import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2';

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  input {
    border: solid 1px rgba(255, 255, 255, 0.3);
    background-color: rgba(150, 0, 0, 0.3);
    color: white;
  }
  button {
    width: 80%;
  }
`;

const Subscribe = () => {
  return (
    <Wrapper>
      <Grid2 container alignItems="center">
        <Grid2 md={6} xs={12}>
          <Button variant="outlined" size="large" color="error">
            Subscribe
          </Button>
        </Grid2>
        <Grid2 container justifyContent="flex-end" md={6} xs={12}>
          <div>
            <h3>
              Subscribe now and get all the benifits of our news and
              offers
            </h3>
            <TextField label="Email" placeholder="example@test.com" />
          </div>
        </Grid2>
      </Grid2>
    </Wrapper>
  );
};

export default Subscribe;
