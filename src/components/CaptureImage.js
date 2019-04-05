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
        apiKey: 'e1dffa6aaaad4e60ae9a629696015026'
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
        this.clarifai.models.initModel({ id: "storeinventory", version: "8a96b0aee6184e74ae42fdddb878f489" })
            .then(productModel => {
                console.log("model found");
                return productModel.predict({ base64: dataUri.substr(22, dataUri.length) });
            })
            .then(response => {
                console.log("response for search")
                var concepts = response['outputs'][0]['data']['concepts']
                console.log(concepts[0].id);
                axios.get("http://localhost:8080/modeldetails/" + concepts[0].id).then(resp => {
                    this.props.history.push({
                    pathname: '/product',
                    state: { data: resp[0]}})
                });
                // axios.get("http://localhost:3001/products?modelid=" + concepts[0].id).then(resp => {
                //     console.log(resp.data);
                //     this.props.history.push({
                //         pathname: '/product',
                //         state: { 
                //             data: resp.data[0],
                //             msg:null
                //          }
                //     })
                // });

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
