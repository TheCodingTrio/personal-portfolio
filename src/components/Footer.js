import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row align-items-end">
          <Col sm={5}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={7} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="URL">
                <img src={navIcon1} />
              </a>
              <a href="https://www.facebook.com/">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>&copy; 2023 TheCodingTrio. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
