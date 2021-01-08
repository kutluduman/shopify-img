import Navbar from "../Home/Navbar";
import styled from "styled-components";

const LoginContainer = styled.div`
position:fixed;
padding:0;
margin:0;

top:20;
left:0;

width: 100%;
height: 100%;
background-color: #CCD7D1;


`;

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginContainer>
        <p>Hello From Login</p>
      </LoginContainer>
    </div>
  );
};

export default Login;
