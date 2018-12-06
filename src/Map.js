import React from 'react';
import type { Recommendation} from "./types";
import ReactMapGL from 'react-map-gl';
import {connect} from "react-redux";

type Props = {
  recommendations: Recommendation[]
};

export class Map extends React.Component<Props> {

  static defaultProps = {
    recommendations: [],
    fetching: false
  };

  state = {
    viewport: {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      latitude: 49.2827,
      longitude: -123.1207,
      zoom: 8
    }
  };

  render = () => {

    // todo:
    // if this.props.fetching show loading spinner

    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={"pk.eyJ1IjoibnVnbWFub3YiLCJhIjoiY2pwYndkbG5rMjViNTNrcXNhamhrNHVjMyJ9.-tmLxyTB-6_2teDQpYcFQg"}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </div>
    )
  }

}

const stateToProps = (state) => {
  return {
    recommendations: state.recommendations,
    fetching: state.fetching
  }
};

export default connect(stateToProps, null)(Map);