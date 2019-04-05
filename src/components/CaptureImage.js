import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import { Button } from 'reactstrap';
import 'react-html5-camera-photo/build/css/index.css';
import './sliderItem.css';
import imageData from '../imageData';
const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/



class CaptureImage extends Component {
    clarifai = new Clarifai.App({
        apiKey: '2c953d506c2b4c5783d1f322ca81274f'
    })
    constructor(props) {
        super(props);
        this.state = {
            showCamera: false
        }
        
        this.showCameraModule = this.showCameraModule.bind(this);
    }
    onTakePhoto(dataUri) {

        console.log(dataUri);
        // Do stuff with the dataUri photo...
        console.log('tookPhoto');
        this.clarifai.models.initModel({ id: "bag2", version: "fcafa1c78229477998cea8114059936c" })
            .then(productModel => {
                console.log("model found");
                return productModel.predict({base64: dataUri.substr(22,dataUri.length)});
            })
            .then(response => {
                console.log("response for search")
                var concepts = response['outputs'][0]['data']['concepts']
                console.log(concepts[0].id);
            });
        // this.props.history.push({
        //     pathname: '/product',
        //     state: {
        //         name: this.state.customerid,
        //         data: {
        //             "msg": "",
        //             "id": 1234,
        //             "modelId": 'a123',
        //             'productName': 'Bag',
        //             "imgurl": dataUri,
        //             "Availability": "yes",
        //             "color": "pink",
        //             "price": 121,
        //             "Inventory": "Rack2",
        //             "onlinelink": "https:google.com/",
        //             "similarItems": [
        //                 {
        //                     'productName': 'Bag', 'color': 'brown',
        //                     'size': 'medium', 'Brand': 'Kennith hole', 'Availability': 'yes', 'Inventory': 'Rack A4',
        //                     'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '45'
        //                 },
        //                 {
        //                     'productName': 'Bag', 'color': 'large',
        //                     'size': 'yellow', 'Brand': 'Kennith hole', 'Availability': 'yes',
        //                     'Inventory': 'Rack A3', 'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '75'
        //                 },

        //                 {
        //                     'productName': 'Bag', 'color': 'red', 'size': 'small', 'Brand': 'Kennith hole', 'Availability': 'yes',
        //                     'Inventory': 'Rack B4', 'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '35'
        //                 }],
        //             "recommendedItems": [
        //                 {
        //                     'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
        //                     'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
        //                     'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
        //                 },
        //                 {
        //                     'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
        //                     'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
        //                     'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
        //                 },
        //                 {
        //                     'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
        //                     'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
        //                     'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
        //                 },
        //                 {
        //                     'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
        //                     'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
        //                     'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
        //                 },
        //                 {
        //                     'productName': 'Travel Bag', 'color': 'Blue', 'size': 'medium',
        //                     'Brand': 'American tourister', 'Availability': 'yes', 'Inventory': 'Rack F2',
        //                     'imgurl': imageData.image1, 'onlinelink': 'link1', 'price': '245'
        //                 }
        //             ]
        //         }
        //     }
        // })
    }
    onCameraError(error) {
        this.props.history.push({
            pathname: '/product',
            state: {
                name: this.state.customerid,
                data: {
                    "msg": "",
                    "id": 1234,
                    "modelId": 'a123',
                    'productName': 'Bag',
                    "imgurl": imageData.image1,
                    "Availability": "yes",
                    "color": "pink",
                    "price": 121,
                    "Inventory": "Rack2",
                    "onlinelink": "https:google.com/",
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
