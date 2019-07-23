import * as React from "react";

interface FooterState {
  moviesCount: number;
}

export class Footer extends React.Component<{}, FooterState> {
  constructor(props) {
    super(props);
    this.state = {
      moviesCount: 0
    };
  }

  render() {
    return <div>{this.state.moviesCount}</div>;
  }
}
