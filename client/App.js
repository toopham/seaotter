import React from 'react';
import "./stylesheet/style.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = (props) => {

  return (<Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    <Footer />
    </Router>);
}

export default App;