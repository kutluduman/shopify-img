import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 78px;
  width: auto;
  border-bottom: 1px solid black;
  background-color: #3CB371;
  padding: 0 55px;

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

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#3CB371',
    marginLeft: theme.spacing(195),    

  }
}));


const Navbar = () => {
  const classes = useStyles();

  return (
    <Nav>
      <SiteName>shopify-img</SiteName>
      <div className={classes.button}>
      <Button>Login</Button>
      <Button>Register</Button>
      </div>
    </Nav>

  )
}

export default Navbar;