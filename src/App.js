import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1 class="title">Daily-UI Project Links</h1>
        <Container>
          <Row>
            <Col lg={3}>
              <ol>
                <li>
                  <a href="https://codepen.io/char502/pen/voJgVg">
                    Sign Up Page{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="https://codepen.io/char502/pen/YmrWZP">
                    Credit Card Checkout Form{" "}
                  </a>{" "}
                </li>
                <li>
                  <a href="#">Landing Page</a>
                </li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
              </ol>
            </Col>
            <Col lg={9}>
              <p>Links to all my Daily-UI Projects</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
