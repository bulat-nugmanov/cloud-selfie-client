import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import store from "./store";
import Main from './components/Mainpage/Mainpage';
import Map from './Map';
import './App.css';

class App extends Component {

  render = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Main}/>
          <Route path="/map" component={Map}/>
        </div>
      </BrowserRouter>
    </Provider>
  )

}

export default App;
