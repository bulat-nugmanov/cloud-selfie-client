import React, { Component } from 'react';
// import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/Input';
import './Mainpage.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Logo</p>
					<div>
						<FilledInput 
							className="input"
						/>
						<Button 
							variant="contained" 
							color="primary"
							className="search">
							GO
						</Button>
						</div>
          <div
            style={{padding: 16}}
          />
        </header>
      </div>
    );
  }
}

export default App;
