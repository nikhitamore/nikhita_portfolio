
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import developer from '../../media/developer.png';
import './Home.css';

class Home extends React.Component {

    particlesLoaded = (container) => {
        console.log(container);
    };
    particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    render() {

        return (
            <>
              
                <div id="home" style={{height:"100vh"}}>
                    <Particles
                        id="tsparticles"

                        init={this.particlesInit}
                        loaded={this.particlesLoaded}
                        style={{
                            position:"absolute",
                            zIndex:-1,
                            height:"100vh"

                        }}
                        options={{
                            fullScreen:false,
                            background: {
                                color: {
                                    value: "#05364e",
                                },
                                zIndex: -1,
                                height: "100px",
                            },
                            fpsLimit: 300,
                            interactivity: {

                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 2,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 40,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                      <Row  style={{ paddingLeft: "10%" }}>
                    <Col lg={6}>
                        <h1 id="name"
                            style={{
                                // paddingLeft: "10%",
                                paddingTop: "7%",
                                color: "#05364e",
                                fontSize: "65px",
                                // position: "absolute",
                                top: 0,
                                left: 0,
                                // width: "100%",
                                // height: "100%"

                            }}>

                            NIKHITA MORE
                        </h1>
                        <div className="scroller">
                            <span>
                                Web Developer
                                <br />
                                Full Stack Engineer
                                <br />
                            </span>
                        </div>
                        <h1 id='based' style={{
                            color: "#fff",
                            paddingTop: "5%",
                            // paddingLeft: "10%",
                            fontSize: "40px",
                            // position: "absolute",
                            top: 200,
                            left: 0,
                            // width: "100%",
                            // height: "100%"
                        }}>based in India.</h1>

                    </Col>
                    <Col id="profile" lg={6}>
                        <img src={developer} alt="developer image" style={{ width: "40%", height: "60%", position: 'absolute', padding: "3% 0 0 0", borderRadius: "18px" }} />
                    </Col>

                </Row>
                </div>
            </>

        );
    };

}
export default Home

