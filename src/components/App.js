import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import FreeProjects from './FreeLanceProject';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            
            <Route exact path="/" component={MainBody}/>
            <Route exact path="/freelanceprojects" component={FreeProjects} />
            <Route exact path="/contact" component={Contact} />

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
