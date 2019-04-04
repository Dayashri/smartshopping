import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Container, Row, Col, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import './product.css'

class ProductDisp extends Component {
  render() {
    return (
      <div style={{ marginTop: "1%" }}>
        <Container>
          <h3 style={{textAlign:"center"}}>Hi {this.props.location.state.data.name} !,   You can find the detail of the product searched</h3>
          <br/>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="5" lg="6" xl="6">
              <Card body className="text-center" style={{ border: "1px solid white" }}>
                <CardImg className="img-responsive" top
                  src={this.props.location.state.data.imgurl} alt={this.props.location.state.data.productName} />
              </Card>
            </Col>
            <Col xs="12" sm="12" md="5" lg="6" xl="6">
              <Card body className="text-left" style={{ border: "1px solid white" }}>
                <CardBody>
                  <br/>
                  <CardTitle>{this.props.location.state.data.productName}</CardTitle>
                  <br />
                  <CardSubtitle>Model : {this.props.location.state.data.modelId}</CardSubtitle>
                  <CardText>Color : {this.props.location.state.data.color}</CardText>
                  {this.props.location.state.data.Availability === 'yes' && (
                    <CardText>Inventory Detail : {this.props.location.state.data.Inventory}</CardText>
                  )}
                  {this.props.location.state.data.Availability === 'yes' && (
                    <CardText>Onsite : <CardLink>{this.props.location.state.data.onlinelink}</CardLink></CardText>
                  )}
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ProductDisp;
