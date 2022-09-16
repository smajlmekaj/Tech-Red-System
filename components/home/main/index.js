import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';

const Wrapper = styled.div`
  text-align: center;
  margin-left: 30px;
  h1 {
    color: maroon;
    text-shadow: 1px 1px 3px red;

    border-radius: 10px;
  }
  img {
    width: 100%;
    max-width: 1400px;
    max-height: 600px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(194, 0, 0, 1);
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const PositionWrapper = styled.div`
  position: relative;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation-name: pulse;
  h1 {
    position: absolute;
    bottom: 50%;
    right: 40%;
    padding: 15px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    }
    30% {
      color: rgba(180, 6, 6, 1);
    }

    70% {
      color: red;

      transform: scale(1);
      box-shadow: 0 0 10px 10px rgba(214, 6, 6, 1);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
    }
  }
`;

const FlexofTwo = styled.div`
  p {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(194, 0, 0, 1);
    font-size: 20px;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={12}>
          <PositionWrapper>
            <h1>Something Different</h1>
            <img src="/images/alamy.jpg" />
          </PositionWrapper>
        </Grid>
        <Grid item lg={6}>
          <FlexofTwo>
            <img src="/images/circuit-board.jpg" />
            <div>
              <h1>Power&Speed</h1>
              <p>
                Lorem ipsum dolor sit. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Repudiandae, tempore.
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Voluptate praesentium similique recusandae,
                nostrum nemo quaerat! Optio eum accusamus consequatur
                minus!
              </p>
            </div>
          </FlexofTwo>
        </Grid>
        <Grid item lg={6}>
          <FlexofTwo>
            <h1>Clear Facts</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus facere harum odio consequuntur ut.
              Corrupti repellat consectetur illum esse repellendus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eos facilis dicta dolorem nam porro
              consequatur eligendi provident nobis ab!
            </p>
          </FlexofTwo>
          <img src=" /images/analyze.jpg" />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Main;
