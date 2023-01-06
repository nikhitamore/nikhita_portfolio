

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Contactme.css';
import Background from '../../media/Collaboration.jpg'
import { Row, Col } from 'react-bootstrap';
import Map from '../../media/Map.PNG';
import EmailForm from './EmailForm'

class Contactme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        return (

            <div id="contact" style={{ backgroundImage: `url(${Background})`, width: "100vw", height: "100vh", backgroundRepeat: "no-repeat", }}>
                <p id="enquiry">Let's work together!</p>
                <br />
                <br />
             
                <button id="enquiry1" style={{ backgroundColor: "black", color: "#fff", height: "50px", width: "190px" }}>Make an enquiry</button>

                {/* 
                <Row  style={{ width: "100vw", height: "100vh", padding: "2%" }}>
                    <Col id="form1" lg={6} style={{ padding: "2%" }}>
                        <h1>Let's work together!</h1>

                        <p>
                            Get In Touch !!
                            <br />
                           Have a question or want to work together?
                            <br />
                            <br />

                            <EmailForm />

                        </p>

                    </Col>
                    <Col lg={6} >
                        <img src={Map} alt="map image" style={{ padding: "2%", position: 'absolute', width: "48vw", height: "95vh" }} />

                    </Col>
                </Row> */}
            </div >
        );
    };

}
export default Contactme

