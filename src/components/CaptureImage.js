import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import { Button } from 'reactstrap';
import axios from 'axios';
import 'react-html5-camera-photo/build/css/index.css';
import './sliderItem.css';
import imageData from '../imageData';
const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/

class CaptureImage extends Component {
    clarifai = new Clarifai.App({
        apiKey: '42aac133db3c487e924be1f6fd636663'
    })
    constructor(props) {
        super(props);
        this.state = {
            showCamera: false,
            cameraErr: false
        }

        this.showCameraModule = this.showCameraModule.bind(this);
    }
    onTakePhoto(dataUri) {
        // Do stuff with the dataUri photo...
        console.log('tookPhoto');
        this.clarifai.models.initModel({ id: "bags", version: "6d9afa75692942be94de8e23bcc3a754" })
            .then(productModel => {
                console.log("model found");
                return productModel.predict({ base64: dataUri.substr(22, dataUri.length) });
            })
            .then(response => {
                console.log("response for search")
                var concepts = response['outputs'][0]['data']['concepts']
                console.log(concepts[0].id);
                console.log(concepts[0]);
                if (concepts[0].value >= 0.70) {
                    console.log('dsd')
                    axios.get("http://localhost:8080/modeldetails/" + concepts[0].id).then(resp => {
                        this.props.history.push({
                            pathname: '/product',
                            state: {
                                data: resp.data[0],
                                msg: null,
                                customerid: this.props.location.state.customerid,
                            }
                        })
                    });
                    // console.log(this.props.location.state.data.similaritems);
                    // axios.get("http://localhost:3001/products?modelid=bag1").then(resp => {
                    //     console.log(resp.data);
                    //     this.props.history.push({
                    //         pathname: '/product',
                    //         state: {
                    //             // customerid: this.props.location.state.cust?omerid,
                    //             data: resp.data[0],
                    //             msg: null,
                    //         }
                    //     })
                    // });
                } else {
                    axios.get("http://localhost:8080/modeldetails/" + concepts[0].id).then(resp => {
                        this.props.history.push({
                            pathname: '/product',
                            state: {
                                data: resp.data[0],
                                customerid: this.props.location.state.customerid,
                                msg: "Sorry! Your requested product is not available at our Store"
                            }
                        })
                    });
                    // console.log(this.props.location.state.data.similaritems);
                    // axios.get("http://localhost:3001/products?modelid=" + "bag1").then(resp => {
                    //     this.props.history.push({
                    //         pathname: '/product',
                    //         state: {
                    //             // customerid: this.props.location.state.customerid,
                    //             data: resp.data[0],
                    //             msg: "Sorry! Your requested product is not available at our Store.Please visit our website"
                    //         }
                    //     })
                    // });
                }

            });

    }

    onCameraError(error) {
        this.setState({
            cameraErr: true
        });
    }

    showCameraModule(e) {
        e.preventDefault();
        this.setState({
            showCamera: true,
            cameraErr: false
        })
    }

    render() {

        return (
            <React.Fragment>
                <div style={{ textAlign: "center" }}>
                    <h3>Start your Smart Search</h3>
                    <br />
                    <br />
                    <br />
                    {this.state.showCamera && (
                        <Camera
                            onCameraError={(error) => { this.onCameraError(error); }}
                            onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }}
                        />

                    )}
                    {!this.state.showCamera && (
                        <React.Fragment>
                            <Button color="info" onClick={(e) => this.showCameraModule(e)}>Capture Your Product</Button>
                            <hr />
                            <div style={{ color: "blue", marginTop: "10%", fontSize: "18px" }}>How It Works</div>
                            <br />
                            Scan the Image from your Mobile/any means in the iSmart App
<br />
                            Now! just click <b>Capture Your Product</b><br />
                            Find the product availablity and where your product is and head to the Aisle to pick it up
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default CaptureImage;
