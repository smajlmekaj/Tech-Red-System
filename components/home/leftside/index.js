import React from 'react';
import DnsIcon from '@mui/icons-material/Dns';
import AndroidIcon from '@mui/icons-material/Android';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 5px 5px 20px rgba(194, 0, 0, 1);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    color: rgba(240, 70, 0, 1);
    font-size: 40px;
    margin: 30px 0;

    border-radius: 20px;
    box-shadow: 3px 3px 5px red;
    :hover {
      color: rgba(240, 0, 0, 1);
      box-shadow: 2px 6px 10px 2px red;
      cursor: pointer;
    }
  }
`;

const FlexofTwo = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 10px;
    :hover {
      color: maroon;
      text-shadow: 3px 3px 5px red;
      cursor: pointer;
    }
  }
`;

const Leftside = () => {
  return (
    <Wrapper>
      <FlexofTwo>
        <DnsIcon />
        <h3>Server</h3>
      </FlexofTwo>
      <FlexofTwo>
        <AndroidIcon />
        <h3>Android</h3>
      </FlexofTwo>
      <FlexofTwo>
        <SettingsSuggestIcon />
        <h3>System</h3>
      </FlexofTwo>
      <FlexofTwo>
        <SmartToyIcon />
        <h3>Intellegenc</h3>
      </FlexofTwo>
      <FlexofTwo>
        <AutoModeIcon />
        <h3>Automate</h3>
      </FlexofTwo>
    </Wrapper>
  );
};

export default Leftside;
