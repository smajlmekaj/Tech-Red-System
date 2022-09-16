import styled from '@emotion/styled';
import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const NavWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 5px 5px 20px rgba(194, 0, 0, 1);
  margin: 0;
  padding: 0;
  border-radius: 20px;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    font-size: 20px;
    h1 {
      margin: 0;
      color: maroon;
      font-size: 50px;
      text-shadow: 3px 3px 5px red;
    }

    li:hover {
      color: rgba(194, 0, 0, 1);
      text-shadow: 3px 3px 5px red;
      cursor: pointer;
    }
  }
`;

const FormWrapper = styled.div`
  font-size: 18px;
  label {
    padding: 10px 0;
  }
  input {
    margin: 10px 0;
    padding: 10px;
  }

  textarea {
    padding: 20px;
  }

  button {
    margin: 10px 0;
  }
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  backgroundImage:
    'linear-gradient( to bottom right,darkred,black,  black,  darkred)',
  border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: '3px 3px 10px 5px rgba(194, 0, 0, 1)',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <NavWrapper>
      <nav>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>
            <h1>OnPRIME</h1>
          </li>
          <li>About</li>
          <li onClick={handleOpen}>Contact</li>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <FormWrapper>
              <Box style={style}>
                <label htmlFor="name">Name</label>
                <input type="name" placeholder="example@email.com" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="example@email.com" />
                <label htmlFor="message">Message</label>
                <textarea rows="10" />
                <Button
                  variant="contained"
                  color="error"
                  size="medium"
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </Box>
            </FormWrapper>
          </Modal>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
