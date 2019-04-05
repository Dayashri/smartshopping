import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import { Button } from 'reactstrap';
import 'react-html5-camera-photo/build/css/index.css';
import './sliderItem.css';
import imageData from '../imageData';
import sampleImage from '../smartShopLogo.png';

class CaptureImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCamera: false
        }
        this.showCameraModule = this.showCameraModule.bind(this);
    }
    onTakePhoto(dataUri) {
        // Do stuff with the dataUri photo...
        console.log('tookPhoto');
        this.props.history.push({
            pathname: '/product',
            state: {
                name: this.state.customerid,
                data: {
                    "msg":"",
                    "id": 1234,
                    "modelId": 'a123',
                    'productName':'Bag',
                    "imgurl":{sampleImage},
                    "Availability":"yes",
                    "color":"pink",
                    "price":121,
                    "Inventory":"Rack2",
                    "onlinelink":"https:google.com/",
                    "similarItems": [
                        {
                            'productName': 'Bag', 'color': 'brown',
                            'size': 'medium', 'Brand': 'Kennith hole', 'Availability': 'yes', 'Inventory': 'Rack A4',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '45'
                        },
                        {
                            'productName': 'Bag', 'color': 'large',
                            'size': 'yellow', 'Brand': 'Kennith hole', 'Availability': 'yes',
                            'Inventory': 'Rack A3', 'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '75'
                        },

                        {
                            'productName': 'Bag', 'color': 'red', 'size': 'small', 'Brand': 'Kennith hole', 'Availability': 'yes',
                            'Inventory': 'Rack B4', 'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '35'
                        }],
                    "Recommended items": [
                        {
                            'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
                            'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
                            'imgurl': 'url1', 'onlinelink': 'link1', 'price': '245'
                        }
                    ]
                }
            }
        })
    }
    onCameraError(error) {
        this.props.history.push({
            pathname: '/product',
            state: {
                name: this.state.customerid,
                data: {
                    "msg":"",
                    "id": 1234,
                    "modelId": 'a123',
                    'productName':'Bag',
                    "imgurl":{sampleImage},
                    "Availability":"yes",
                    "color":"pink",
                    "price":121,
                    "Inventory":"Rack2",
                    "onlinelink":"https:google.com/",
                    "similarItems": [
                        {
                            'productName': 'Bag', 'color': 'brown',
                            'size': 'medium', 'Brand': 'Kennith hole', 'Availability': 'yes', 'Inventory': 'Rack A4',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '45'
                        },
                        {
                            'productName': 'Bag', 'color': 'large',
                            'size': 'yellow', 'Brand': 'Kennith hole', 'Availability': 'yes',
                            'Inventory': 'Rack A3', 'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '75'
                        },

                        {
                            'productName': 'Bag', 'color': 'red', 'size': 'small', 'Brand': 'Kennith hole', 'Availability': 'yes',
                            'Inventory': 'Rack B4', 'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '35'
                        }],
                    "recommendedItems": [
                        {
                            'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
                            'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
                        },
                        {
                            'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
                            'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
                        },
                        {
                            'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
                            'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
                        },
                        {
                            'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
                            'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
                        },
                        {
                            'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
                            'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
                            'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
                        }
                    ]
                }

            }
        })
    }

    showCameraModule(e) {
        e.preventDefault();
        this.setState({
            showCamera: true
        })
    }

    render() {
        return (
            <React.Fragment>
            <div style={{ textAlign: "center", margin: "10%" }}>
                <h3>Hi {this.props.location.state.name}!.</h3>
                <h5>Start your Smart Search</h5>
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
                    <Button color="info" onClick={(e) => this.showCameraModule(e)}>Capture Your Product</Button>
                )}
            </div>
            </React.Fragment>
        );
    }
}

export default CaptureImage;
