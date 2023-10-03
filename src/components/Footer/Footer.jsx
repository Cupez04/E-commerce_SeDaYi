import React from 'react';
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" className="mb-4">
          <div className="logo">
              <div>
                <h1 className='text-white'>SeDaYi</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, natus!
              </p>
          </Col>

          <Col lg="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                 <span className='text-white'><i class="ri-map-pin-line"></i></span>
                  <p className='text-white'>Ventaquemada</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span className='text-white'><i class="ri-phone-line"></i></span>
                  <p className='text-white'>3135958070</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
          <span className='text-white'><i class="ri-mail-line"></i></span>
                  <p className='text-white'>sedanyishop@gmail.com</p>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className='footer__copyright'>Copyright {year} designed by Angie Farfan and Daniela Rios</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer