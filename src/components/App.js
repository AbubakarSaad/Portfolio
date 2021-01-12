import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';
import FreeProjects from './FreeLanceProject';
import Contact from './Contact';
import ReactGa from 'react-ga';


class App extends Component {

  componentDidMount() {
    ReactGa.initialize('UA-178399659-1');

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }

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
