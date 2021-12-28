import React from 'react';
import "./stylesheet/style.css";
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = (props) => {

  return (<Router>
    <Header />
    <MainContainer />
    <Footer />
    </Router>);
}

export default App;