import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Container, Row, Col, CardTitle, CardSubtitle, CardLink, Button } from 'reactstrap';
import Slider from "react-slick";
import './product.css';
import Modal from 'react-responsive-modal';

class ProductDisp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLocationModal: false
    }
  }

  onOpenModal = () => {
    this.setState({ openLocationModal: true });
  };

  onCloseModal = () => {
    this.setState({ openLocationModal: false });
  };

  render() {
    var settings = {
      dots: true,
      autoplay: true,
      adaptiveHeight: true
    };
    return (
      <div style={{ marginTop: "1%" }}>
        {(this.props.location.state.msg === undefined ||
          this.props.location.state.msg === null ||
          this.props.location.state.msg.length === 0) && (
            <React.Fragment>
              <Container className="prodConstainer">
                <Row className="justify-content-center">
                  {this.props.location.state.data.similaritems !== null &&
                    this.props.location.state.data.similaritems !== undefined &&
                    this.props.location.state.data.similaritems.length !== 0 &&
                    this.props.location.state.data.similaritems.map((item, index) =>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4" key={index} id={"similar" + index}>
                        <Card body className="text-center" style={{ border: "1px solid white" }}>
                          <CardImg top
                            src={item.imgurl}
                            className="img-responsive"
                            alt={item.productname} />
                          <CardBody>
                            <br />
                            <CardTitle>{item.Brand + "  " + item.productname}</CardTitle>
                            <br />
                            <CardSubtitle style={{ color: "orange", fontWeight: "bold", textAlign: "left" }}>Price : ${item.price}.00</CardSubtitle>
                            <CardText style={{ textAlign: "left" }}>Size : {item.size}</CardText>
                            <CardText style={{ textAlign: "left" }}>Color : {item.color}</CardText>
                            <CardText style={{ textAlign: "left" }}> Location:
                              <Button color="primary" onClick={this.onOpenModal}>{item.location}</Button>
                              <Modal open={this.state.openLocationModal} onClose={this.onCloseModal} center>
                                <img
                                  src={item.locationurl}
                                  className="img-responsive"
                                  alt={item.Brand + "  " + item.productname} />
                              </Modal>
                            </CardText>
                            {item.availabilityQty > 0 && (
                              <React.Fragment>
                                <CardText style={{ color: "green" }}>In Stock{item.Inventory}</CardText>
                                <CardText>Inventory Detail : {item.Inventory}</CardText>
                                <CardText>Onlinelink : <CardLink>{item.onlinelink}</CardLink></CardText>
                              </React.Fragment>
                            )}
                            {item.availabilityQty === 0 && (
                              <React.Fragment>
                                <CardText style={{ color: "red" }}>Oops! Out of Stock{item.Inventory}</CardText>
                              </React.Fragment>
                            )}
                          </CardBody>
                        </Card>
                      </Col>)}

                </Row>
              </Container>

            </React.Fragment>
          )}

        {this.props.location.state.msg !== undefined &&
          this.props.location.state.msg !== null &&
          this.props.location.state.msg.length !== 0 && (
            <React.Fragment>
              Sorry! {this.props.location.state.msg}
            </React.Fragment>
          )}
        <br />
        <Container>
          <h3>Some Recommended Product for you!</h3>
          <Container>


            <Slider {...settings}>
              {this.props.location.state.data.recoitems.map((item, index) =>
                <div key={"similar" + index}>
                  <Row className="justify-content-center">
                    <Col xs="6" sm="6" md="6" lg="6" xl="6" key={index} id={"similar" + index}>
                      <Card body className="text-center" style={{ border: "1px solid white" }}>
                        <CardBody>
                          <br />
                          <CardTitle>{item.Brand + "  " + item.productname}</CardTitle>
                          <br />
                          <CardSubtitle style={{ color: "orange", fontWeight: "bold"}}>Price : ${item.price}.00</CardSubtitle>
                          <CardText>Color : {item.color}</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs="6" sm="6" md="6" lg="6" xl="6" key={index} id={"similar" + index}>
                      <Card body className="text-center" style={{ border: "1px solid white" }}>
                        <CardImg top
                          src={item.imgurl}
                          className="img-responsive"
                          alt={item.Brand + "  " + item.productname} />
                      </Card>
                    </Col>
                  </Row>

                </div>)
              }
            </Slider>
          </Container>
        </Container>


      </div>
    )
  }
}

export default ProductDisp;
