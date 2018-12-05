import React from 'react';
import type { Recommendation} from "./types";
import {connect} from "react-redux";

type Props = {
  recommendations: Recommendation[]
};

export class Map extends React.Component<Props> {

  render = () => (
    <div>todo: show recommendations</div>
  )

}

const stateToProps = (state) => ({
  recommendations: state.recommendations
});

export default connect(stateToProps, null)(Map);