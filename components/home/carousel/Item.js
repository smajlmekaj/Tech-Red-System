import React from 'react';
import { Paper, Button } from '@mui/material';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 600px;
    border-radius: 18px;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  button {
    position: absolute;
    bottom: 10px;
  }
`;

const PositionWrapper = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 10px;
  h3 {
    margin: 5px 0;
  }
  p {
    margin: 5px 0;
  }
`;

const Item = (props) => {
  return (
    <Wrapper>
      <Paper
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '20px',
        }}
      >
        <PositionWrapper>
          <h3>{props.item.name}</h3>
          <p>{props.item.description}</p>
        </PositionWrapper>
        <img src={props.item.img} />
        <Button variant="contained" size="large" color="secondary">
          Checkout More
        </Button>
      </Paper>
    </Wrapper>
  );
};

export default Item;
