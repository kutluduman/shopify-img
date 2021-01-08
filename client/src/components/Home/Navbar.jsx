import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import logo from '../../docs/logo.jpg';



const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 78px;
  width: auto;
  border-bottom: 1px solid black;
  background-color: #3CB371;
  padding: 0 55px;


  .login-register {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 90%;
  }

  .logo {
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 750px) {
    height: 51px;
    padding: 0 24px;
  } `;

  const SiteName = styled.p`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  cursor: pointer;
 
  @media only screen and (max-width: 750px) {
    font-size: 18px;
  }
`;


const Navbar = () => {

  return (
    <Nav>
      <Button href="http://localhost:3000/">
                  {" "}
                  <img src={logo} className="logo" alt="logo"></img>{" "}
      </Button>
      <Button href="http://localhost:3000/">
      <SiteName>shopify.img</SiteName>
      </Button>
        <div className='login-register'>
          <Button href='/login'>Login</Button>
          <Button href='/register'>Register</Button>
        </div>
    </Nav>
  )
}

export default Navbar;