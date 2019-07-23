import * as React from 'react';
import { connect } from 'react-redux';
interface FooterState {
  moviesCount: number;
}
interface FooterProp {
  movies?: number;
  dispatch?: any;
}
class Footer extends React.Component<FooterProp, FooterState> {
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
      <div>
        {this.props.movies}
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+</button>
      </div>
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
)(Footer);
