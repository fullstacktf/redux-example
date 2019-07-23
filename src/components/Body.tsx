import * as React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #FFFFFF;
  padding: 40px;
`;

interface BodyState {
  moviesCount: number;
}

export class Body extends React.Component<{}, BodyState> {
  constructor(props) {
    super(props);
    this.state = {
      moviesCount: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ moviesCount: this.state.moviesCount + 1 })
  }

  render() {
    return <Container>
      <button onClick={this.increment}>+</button>
      {this.state.moviesCount}
    </Container>
  }
}
