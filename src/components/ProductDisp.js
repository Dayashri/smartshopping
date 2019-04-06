import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Container, Row, Col, CardTitle, CardSubtitle, CardLink, Button } from 'reactstrap';
import Slider from "react-slick";
import './product.css';
import Modal from 'react-responsive-modal';

class ProductDisp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLocationModal: false,
      orderModal: false
    }
  }

  onOpenModal = () => {
    this.setState({ openLocationModal: true }, () => {
      setTimeout(this.onCloseModal, 3000);
    });
  };

  onCloseModal = () => {
    this.setState({ openLocationModal: false });
  };

  onOpenOrderModal = () => {
    this.setState({ orderModal: true }, () => {
      setTimeout(this.onCloseOrderModal, 3000);
    });
  };

  onCloseOrderModal = () => {
    this.setState({ orderModal: false });
  };

  goBacktoCapture = () => {
    this.props.history.push({
      pathname: '/captureProduct',
      state: {
        customerid: this.props.location.state.customerid,
      }
    })
  }

  render() {
    var settings = {
      dots: true,
      autoplay: true,
    };
    return (
      <div style={{ marginTop: "1%" }}>
        <React.Fragment>
          <div >
            <Button color="info" style={{ fontSize: "23px" }} onClick={this.goBacktoCapture}><i className="glyphicon glyphicon-camera"></i>&nbsp;Start a new Search</Button>
            <br />
            <br />
          </div>
          <i className="glyphicon glyphicon-home" style={{ color: "blue" }}></i> <span style={{ color: "blue" }}>Store: </span><span style={{ fontSize: "16px" }}>45485 Miramar Way, California, MD 20619, USA</span>
          <hr />
        </React.Fragment>
        {
          (this.props.location.state.msg === undefined ||
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
                            <CardSubtitle style={{ color: "orange", fontWeight: "bold", textAlign: "left" }}>Price : ${item.availablity[0].price}.00</CardSubtitle>
                            <CardText style={{ textAlign: "left" }}>Size : {item.size}</CardText>
                            <CardText style={{ textAlign: "left" }}>Color : {item.color}</CardText>
                            {item.availablity[0].qty > 0 && (
                              <React.Fragment>
                                <CardText style={{ color: "darkgreen", textAlign: "left", fontWeight: "bold" }}>In Stock in <
                                  Button color="primary" onClick={this.onOpenModal}>{item.location}</Button>
                                  <Modal open={this.state.openLocationModal} onClose={this.onCloseModal} center>
                                    <img
                                      src={item.locationurl}
                                      className="img-responsive"
                                      alt={item.Brand + "  " + item.productname} />
                                  </Modal></CardText>
                                <CardLink style={{ textAlign: "left", fontSize: "14px" }}>www.ismartinstoreshopping.com/product/{this.props.location.state.data.modelid}</CardLink>
                              </React.Fragment>
                            )}
                            {item.availablity[0].qty === 0 && (
                              <React.Fragment style={{ textAlign: "left" }}>
                                <CardText style={{ color: "red", textAlign: "left", fontWeight: "bold" }}>
                                  Oops! Out of Stock
                                </CardText>
                                {/* <CardText style={{ textAlign: "left", fontWeight: "bold" }}>
                                  <Button color="info" onClick={this.onOpenOrderModal}>Place order and Pickup Later</Button>
                                  <Modal open={this.state.orderModal} onClose={this.onCloseOrderModal} showCloseIcon={false} center>
                                    Your Order has been Placed.You will be notified via your registered Mobile number
                                  </Modal>
                                </CardText> */}

                              </React.Fragment>
                            )}
                            {item.availablity.map((storeDet, storeDetIndex) => (
                              <React.Fragment key={storeDetIndex}>
                                {storeDetIndex !== 0 && (
                                  <CardText>{storeDet.qty + ' available for ' + storeDet.price + ' at ' + storeDet.store}</CardText>
                                )}
                                {storeDetIndex === 0 && (
                                  <CardText/>
                                )}
                              </React.Fragment>
                              ))}
                          </CardBody>
                        </Card>
                      </Col>)}
    
                </Row>
              </Container>

            </React.Fragment>
                )
              }
      
        {
                    this.props.location.state.msg !== undefined &&
                    this.props.location.state.msg !== null &&
                    this.props.location.state.msg.length !== 0 && (
                      <React.Fragment>
                        <div style={{ textAlign: "center", fontWeight: "bold", color: "red" }}>
                          <h3>{this.props.location.state.msg}</h3></div>
                      </React.Fragment>
                    )
                  }
                  <br />
                  <Container className="recoConstainer">
                    <h3 style={{ fontWeight: "bold" }}>Some Recommended Product/s for you!</h3>
                    <Container>


                      <Slider {...settings}>
                        {this.props.location.state.data.recoitems.map((item, index) =>
                          <div key={"recommended" + index}>
                            <Row className="justify-content-center" >
                              <Col xs="6" sm="6" md="6" lg="6" xl="6">
                                <Card body className="text-center" style={{ border: "1px solid white" }}>
                                  <CardBody>
                                    <br />
                                    <CardTitle>{item.Brand + "  " + item.productname}</CardTitle>
                                    <br />
                                    <CardSubtitle style={{ color: "orange", fontWeight: "bold" }}>Price : ${item.price}.00</CardSubtitle>
                                    <CardText>Color : {item.color}</CardText>
                                    <CardSubtitle style={{ color: "blue", fontWeight: "bold" }}>Use {item.coupons} and avail {item.promotion} % OFF</CardSubtitle>
                                    <CardSubtitle style={{ color: "blue", fontWeight: "bold" }}>{item.offer}</CardSubtitle>

                                  </CardBody>
                                </Card>
                              </Col>
                              <Col xs="6" sm="6" md="6" lg="6" xl="6">
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


      </div >
                )
              }
            }
            
            export default ProductDisp;
