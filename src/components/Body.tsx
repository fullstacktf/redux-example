import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

const Container = styled.div`
  background: #ffffff;
  padding: 40px;
`;

interface BodyState {
  moviesCount: number;
}
interface BodyProp {
  movies?: number;
  dispatch?: any;
}
class Body extends React.Component<BodyProp, BodyState> {
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
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+</button>
        {this.props.movies}
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
)(Body);
