import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "./components/LoginForm.jsx";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerid: ''
    }
    this.toCapture = this.toCapture.bind(this);
  }


  toCapture(customerid) {
    this.setState({ customerid });
    this.props.history.push({
      pathname: '/captureProduct',
      state: {
        name: customerid
      }
    })
  }

  render() {
    return (
      <Container className="App">
        <Container style={{ margin: "0 auto" }}>
          <Row>
            <Col lg="2" />
            <Col lg="8">
              <Jumbotron>
                <h3>
                  Welcome to iSmart Instore Shopping
                </h3>
                <hr />
                <Card>
                  <CardBody>
                    <LoginForm onSubmit={this.toCapture} />
                  </CardBody>
                </Card>
              </Jumbotron>
            </Col>
            <Col lg="2" />
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
