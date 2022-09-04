
import { NavLink } from "react-router-dom";
import {
  Nav,
  Container,
  Navbar as NavbarBs, 
  } from "react-bootstrap";

import { Button, } from "./Navbar.styles";

import { BsCart4 } from "react-icons/bs";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar = () => {
  const {openCart, cartQuantity} = useShoppingCart()

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link className="nav__link" to="/home" as={NavLink}>
            Home
          </Nav.Link>

          <Nav.Link className="nav__link" to="/store" as={NavLink}>
            store
          </Nav.Link>

          <Nav.Link className="nav__link" to="/about" as={NavLink}>
            about
          </Nav.Link>
        </Nav>
          {cartQuantity > 0 && (
          <Button 
          onClick={openCart}
          className="rounded-circle"
          >
            <BsCart4 className="nav__link__icon" />
            
          <div className="nav__link_roundedCircle bg-danger">{cartQuantity}</div>
          </Button>
        )}
 
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
