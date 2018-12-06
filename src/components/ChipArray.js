import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing.unit / 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

type Datum = {
  key: string,
  label: string
}

type Props = {
  classes: Object,
  data: Datum[],
  onTagDelete: Datum => void
}

class ChipsArray extends React.Component<Props> {

  static defaultProps = {
    data: []
  };

  render() {

    const { classes, data } = this.props;

    return (
      <Paper className={classes.root}>
        {
          data.map(data => (
            <Chip
              key={data.key}
              icon={null}
              label={data.label}
              onDelete={this.props.onTagDelete(data)}
              className={classes.chip}
            />
          )
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(ChipsArray);