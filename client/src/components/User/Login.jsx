import { useState } from "react";
import Navbar from "../Home/Navbar";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const PageContainer = styled.section`
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
    text-align: center;
    align-items: center;
    margin-top: 1em;
  }
  form.form .MuiFormControl-root {
    margin-bottom: 1em;
  }

  button {
    width: 100px;
    height: auto;
    background-color: #3cb371 !important;
  }

  div.signup-instead-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 0.8em;
    color: #576d5c;
    margin-top: 1em;
  }
  div.signup-instead-wrapper button {
    margin-top: -6px;
    font-size: 1.8em;
    width: 100px;
    height: auto;
  }

  .link {
    color: black;
    font-size: 20px;
  }
`;

const Login = () => {
  const [stateLogin, setStateLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <Navbar />
      <PageContainer>
        <Fade top>
          <h2 className="form-title">Login</h2>
        </Fade>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            required={true}
            onChange={(event) =>
              setStateLogin({ ...stateLogin, email: event.target.value })
            }
            label="Email"
            value={stateLogin.email}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            type="password"
            onChange={(event) =>
              setStateLogin({ ...stateLogin, password: event.target.value })
            }
            label="Password"
            value={stateLogin.password}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <Button
            className="button"
            fullWidth
            variant="contained"
            type="submit"
          >
            LOGIN
          </Button>
        </form>
        <div className="signup-instead-wrapper">
          <p className="paragraph">Don't have an account?</p>
          <a className="link" href="/register">
            Signup!
          </a>
        </div>
      </PageContainer>
    </div>
  );
};

export default Login;
