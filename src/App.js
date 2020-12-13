import React from 'react';
import {BrowserRouter} from 'react-router-dom'
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
import FooterBye from './components/FooterBye';
// import Footer1 from './components/Footer1'

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <BrowserRouter>
            <Header />
            <Section />
            <Animation/>
            {/* <Buttons/>
             */}
             <Zero/>
             <Partnership/>
             <Security/>
             <Crypto/>
             <FooterBye/>
          </BrowserRouter>
        </div>
      </DataProvider>
    );
  }
}

export default App;
