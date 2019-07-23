import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 5px;
  background: lightblue;
  color: black;
`;

interface HeaderState {
  moviesCount: number;
}
interface HeaderProp {
  movies?: number;
  dispatch?: any;
}

class Header extends React.Component<HeaderProp, HeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      moviesCount: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    const action = {
      type: 'INCREMENT_MOVIES',
      delta: 1
    };
    this.props.dispatch(action);

    // this.setState({ moviesCount: this.state.moviesCount + 1 });
  }
  decrement() {
    const action = {
      type: 'DECREMENT_MOVIES',
      delta: 1
    };
    this.props.dispatch(action);
  }
  reset() {
    const action = {
      type: 'RESET_MOVIES'
    };
    this.props.dispatch(action);
  }

  render() {
    return (
      <Container>
        Total movies {this.props.movies}
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+</button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies.value };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    dispatch: dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
