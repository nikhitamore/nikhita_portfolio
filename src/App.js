import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import AboutMe from './components/About/About';
import Contactme from './components/Contactme/Contactme';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { Route, useParams } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <>
                <NavigationBar />
                <Home />
                <AboutMe />
                <Contactme />
            
            </>
        );
    };


}
export default App

