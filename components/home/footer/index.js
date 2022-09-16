import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid red;
  background-image: linear-gradient(to right, black, black, maroon);
  padding: 10px;
  color: red;
  h1 {
    margin: 0;
    color: maroon;
    font-size: 50px;
    text-shadow: 3px 3px 5px red;
  }
  li {
    list-style: none;
    margin: 5px 0;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <h1>OnPrime</h1>

      <ul>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
      </ul>

      <ul>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Terms of Use</li>
      </ul>

      <Button variant="contained" color="error" size="large">
        Start Dominating
      </Button>
    </Wrapper>
  );
};

export default Footer;
