import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "./components/LoginForm.jsx";
import './App.css';
import scenarioImg from './assets/icons.jpg';
import cartImg from './assets/Cart.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.toCapture = this.toCapture.bind(this);
  }


  toCapture(customerid) {
    this.props.history.push({
      pathname: '/captureProduct',
      state: {
        customerid: customerid
      }
    })
  }

  render() {
    return (
      <Container className="App">
        <Container style={{ margin: "0 auto" }}>
          <Row>
            {/* <Col lg="2">
            <img className="img-responsive" src={cartImg}/>
            </Col> */}
            <Col lg="2"/>
            <Col lg="8">
              <Jumbotron>
                <h3>
                  Welcome to iSmart Shopping
                </h3>
                <hr />
                <Card>
                  <CardBody>
                    <LoginForm onSubmit={this.toCapture} />
                  </CardBody>
                </Card>
              </Jumbotron>
            </Col>
            {/* <Col lg="2">
              <img className="img-responsive" src={scenarioImg}/>
            </Col> */}
            <Col lg="2"/>
          </Row>
          <Row>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
