import { useState } from "react";
import Navbar from "../Home/Navbar";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
    text-align: center;
    align-items: center;
  }
  form.form .MuiFormControl-root {
    margin-bottom: 1em;
  }

  button {
    width: 100px;
    height: auto;
    background-color: #3cb371 !important;
  }
`;

const Register = (props) => {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate() {
    if (!firstName) {
      setError("First Name is required!");
      return false;
    }
    if (!lastName) {
      setError("Last Name is required!");
      return false;
    }
    if (!email) {
      setError("Email is required!");
      return false;
    }
    if (!password) {
      setError("Password is required!");
      return false;
    }

    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };

    axios
      .post(`http://localhost:8080/register`, user)
      .then((res) => {
        if (res.status === 200) {
          props.setCookie("name", user.email, { path: "/" });
          setRedirect(true);
        }
      })
      .catch((err) => {
        setError("Account already exists!");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
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
          <h2 className="form-title">Register</h2>
        </Fade>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            required={true}
            onChange={ handleChangeFirstName }
            label="First Name"
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            onChange={ handleChangeLastName }
            label="Last Name"
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            required={true}
            onChange={ handleChangeEmail }
            label="Email"
            variant="filled"
            size="medium"
            fullfullWidth={true}
          />
          <TextField
            required={true}
            type="password"
            onChange={ handleChangePassword }
            label="Password"
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
            REGISTER
          </Button>
        </form>
      </PageContainer>
    </div>
  );
};

export default Register;
