import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Animation from './components/animation'
import Buttons from './components/Buttons'
import Abc from './components/abc'
import Zero from './components/Zero'
import Partnership from './components/Partnership'
import Security from './components/Security'
import Crypto from './components/Crypto'
import Footer from './components/Footer'

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            <Animation/>
            {/* <Buttons/>
             */}
             <Zero/>
             <Partnership/>
             <Security/>
             <Crypto/>
             <Footer/>
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
