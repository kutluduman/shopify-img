import { useState } from "react";
import Navbar from "../Home/Navbar";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { TextField } from "@material-ui/core";
import { Button } from '@material-ui/core';

const PageContainer = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;

  top: 20;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: #ccd7d1;

  .form-title {
    color: black;
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  form.form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2em;
    margin-left: 50em;
    width: 25em;
  }
  form.form .MuiFormControl-root {
    margin-bottom: 1em;
  }
  
`;

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <Navbar />
      <PageContainer>
        <Fade top>
          <h2 className="form-title">Register</h2>
        </Fade>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            required={true}
            // onChange={(event) =>
            //   setStateLogin({ ...stateLogin, username: event.target.value })
            // }
            label="First Name"
            // value={stateLogin.username}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            // onChange={(event) =>
            //   setStateLogin({ ...stateLogin, password: event.target.value })
            // }
            label="Last Name"
            // value={stateLogin.password}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            required={true}
            // onChange={(event) =>
            //   setStateLogin({ ...stateLogin, username: event.target.value })
            // }
            label="Email"
            // value={stateLogin.username}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            required={true}
            type="password"
            // onChange={(event) =>
            //   setStateLogin({ ...stateLogin, username: event.target.value })
            // }
            label="Password"
            // value={stateLogin.username}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <Button fullWidth variant="contained" color="primary" type="submit">
            REGISTER
          </Button>
        </form>
      </PageContainer>
    </div>
  );
};

export default Register;
