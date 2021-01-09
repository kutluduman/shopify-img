import { useState } from "react";
import Navbar from "../Home/Navbar";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

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

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const user = {
    email,
    password,
  };

  const validate = () => {
    if (!email) {
      setError("Email is required!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }

    const user = {
      email,
      password,
    };

    axios
      .post(`http://localhost:8080/login`, { user })
      .then((res) => {
        if (res.status === 200) {
          props.setCookie("name", user.email, { path: "/" });
          setRedirect(true);
        }
      })
      .catch((err) => {
        setError("Incorrect Email or Password!");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    setEmail("");
    setPassword("");
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <PageContainer>
        <Fade top>
          <h2 className="form-title">Login</h2>
        </Fade>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            required={true}
            onChange={handleChangeEmail}
            label="Email"
            value={email}
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            type="password"
            onChange={handleChangePassword}
            label="Password"
            value={password}
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
