import React from 'react';
import type { Recommendation} from "./types";
import {connect} from "react-redux";

type Props = {
  recommendations: Recommendation[]
};

export class Map extends React.Component<Props> {

  static defaultProps = {
    recommendations: [],
    fetching: false
  };

  render = () => {

    // todo:
    // if this.props.fetching show loading spinner

    return (
      <div>todo: show recommendations</div>
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