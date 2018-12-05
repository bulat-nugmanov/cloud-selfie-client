import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Mainpage from './components/Mainpage/Mainpage';

class App extends Component {

  render = () => (
    <Provider store={store}>
      <Mainpage/>
    </Provider>
  )

}

export default App;
