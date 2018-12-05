// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/Input';
import { fetchRecommendations} from "../../actions";
import './Mainpage.css';
import {connect} from "react-redux";

type State = {
  errorMessage: string
}

type Props = {
  fetchRecommendations: () => void,
}

class Main extends Component<Props, State> {

  state = {
    errorMessage: undefined
  };

  handleLocationError = () => {
    this.setState({
      errorMessage: "Something went wrong getting your location :("
    });
  };

  handleLocationSuccess = (position: Position) => {

    this.props.fetchRecommendations({
      location: {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
    });

    this.props.history.push('/map');

  };

  onContinue = () => {

    if(!("geolocation" in navigator)) {
      this.setState({
        errorMessage: "Need to know your location for this to work :)"
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      this.handleLocationSuccess,
      this.handleLocationError
    );

  };

  render() {

    return (
      <div className="App">
        <p>Logo</p>
        <div>
          <FilledInput className="input"/>
          <Button
            color="primary"
            onClick={this.onContinue}
            variant="contained"
            style={{ marginLeft: 20 }}
            className="search">
            GO
          </Button>
        </div>
        {
          this.state.errorMessage &&
          <div>this.state.errorMessage</div>
        }
      </div>
    );
  }
}

export default connect(null, {
  fetchRecommendations
})(Main);
