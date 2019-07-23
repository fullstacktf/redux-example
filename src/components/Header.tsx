import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 5px;
  background: lightblue;
  color: black;
`;

interface HeaderState {
  moviesCount: number;
}

export class Header extends React.Component<{}, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      moviesCount: 0
    }
  }

  render() {
    return <Container>Total movies {this.state.moviesCount}</Container>
  }
}
