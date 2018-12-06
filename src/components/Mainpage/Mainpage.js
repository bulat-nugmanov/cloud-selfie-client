// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { fetchRecommendations} from "../../actions";
import './Mainpage.css';
import {connect} from "react-redux";
import ChipsArray from "../ChipArray";

type Tag = {
  key: string,
  label: string
}

type State = {
  errorMessage: string,
  nextTag: string,
  tags: Tag[]
}

type Props = {
  fetchRecommendations: () => void,
}

class Main extends Component<Props, State> {

  state = {
    errorMessage: undefined,
    nextTag: undefined,
    tags: [{
      label: 'modern art',
      key: "1"
    }]
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

  onAddTag = () => {

    const { nextTag, tags } = this.state;
    if(!nextTag || nextTag === '') return;

    this.setState({
      nextTag: "",
      tags: [...tags, {
        key: tags.length + 1,
        label: nextTag
      }]
    });

  };



  render() {

    return (
      <div className="App">
        <p>Logo</p>
        <div style={{marginBottom: 50, marginTop: 50}}>
          <Input
            style={{width: 330}}
            value={this.state.nextTag}
            onChange={e => { this.setState({nextTag: e.target.value})}}
          />
          <Button
            style={{ marginLeft: 20 }}
            variant={"outlined"}
            onClick={this.onAddTag}>
            +
          </Button>
          <Button
            color="primary"
            onClick={this.onContinue}
            variant="contained"
            style={{ marginLeft: 20 }}
            className="search">
            GO
          </Button>
        </div>
        <div style={{width: 500, margin: 'auto'}}>
          <ChipsArray
            data={this.state.tags}
            onTagDelete={() => {}}
          />
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
