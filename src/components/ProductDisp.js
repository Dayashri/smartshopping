import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Container, Row, Col, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import Slider from "react-slick";
import './product.css';
import sampleImage from '../smartShopLogo.png';

class ProductDisp extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      adaptiveHeight: true
    };
    var recommendedSetting = {
      dots: false,
      autoplay: false,
      adaptiveHeight: true
    }
    return (
      <div style={{ marginTop: "1%" }}>
        {(this.props.location.state.data.msg === undefined ||
          this.props.location.state.data.msg === null ||
          this.props.location.state.data.msg.length === 0) && (
            <React.Fragment>
              <Container className="prodConstainer">
                <Row className="justify-content-center">
                  <Col xs="12" sm="12" md="5" lg="6" xl="6">
                    <Card body className="text-center" style={{ border: "1px solid white" }}>
                      <CardImg top
                        // src={this.props.location.state.data.imgurl} 
                        src={sampleImage}
                        alt={this.props.location.state.data.productName} />
                    </Card>
                  </Col>
                  <Col xs="12" sm="12" md="5" lg="6" xl="6">
                    <Card body className="text-left" style={{ border: "1px solid white" }}>
                      <CardBody>
                        <br />
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
                    <Slider {...settings}>
                      {this.props.location.state.data.similarItems.map((index, item) =>
                        <div key={"similar" + index}>
                          <img src={item.imgurl} />
                        </div>)
                      }
                    </Slider>

                  </Col>
                </Row>
              </Container>

            </React.Fragment>
          )}

        {this.props.location.state.data.msg !== undefined &&
          this.props.location.state.data.msg !== null &&
          this.props.location.state.data.msg.length !== 0 && (
            <React.Fragment>
              Sorry! {this.props.location.state.data.msg}
            </React.Fragment>
          )}
        <br />
        <Container>
          <h3>Some Recommended Product for you!</h3>
          <Container>
            {this.props.location.state.data.recommendedItems.map((index, item) =>
              <Col xs="12" sm="12" md="3" lg="3" xl="3">
                To Be Implemented
          </Col>)}
          </Container>
        </Container>


      </div>
        )
  }
}

export default ProductDisp;
