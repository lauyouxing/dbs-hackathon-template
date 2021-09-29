import DBS from './DBS.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
      sticky = "top">
        <Navbar.Brand>
          <img src = {DBS} width="60px" height="40px" />{' '}
        </Navbar.Brand>

        <Nav>
          <NavDropdown title="Products">
            <NavDropdown.Item href="products/insurance">Insurance</NavDropdown.Item>
            <NavDropdown.Item href="products/creditcard">CreditCard</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="products/promo">Promo</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link href="blog">Blog</Nav.Link>
        <Nav.Link href="about-us">About Us</Nav.Link>
        <Nav.Link href="contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <div className="content">
        This is a content.
      </div>
    </div>
  );
}

export default App;
