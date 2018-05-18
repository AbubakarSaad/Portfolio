import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainBody />
        <Footer />
      </div>
    );
  }
}

export default App;
