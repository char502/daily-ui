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
        <h1>Daily-UI Project Links</h1>
        <Container>
          <Row>
            <Col lg={4}>
              <ol>
                <li>
                  <a href="https://codepen.io/char502/pen/voJgVg">
                    Sign Up Page{" "}
                  </a>{" "}
                </li>
                <li>Credit Card Checkout Form or Page</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
              </ol>
            </Col>
            <Col lg={8}>
              <p>The sidebar contains links of all my Daily-UI Projects</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
