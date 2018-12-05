// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/Input';
import { fetchRecommendations} from "../../actions";
import './Mainpage.css';
import {connect} from "react-redux";

type Props = {
  fetchRecommendations: () => void
}

class Main extends Component<Props> {

  onContinue = () => {
    this.props.fetchRecommendations({}); // todo
    this.props.history.push('/map');
  };

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
              color="primary"
              onClick={this.onContinue}
							variant="contained"
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

export default connect(null, {
	fetchRecommendations
})(Main);
