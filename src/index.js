import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });

    // this.setState(state => ({ counter: state.counter + 1 }));
    // this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      // <div> Oou usa a div, ou o Fragment
      <Fragment>
        <h1>Hello react</h1>
        {/* <Button title="Enviaaar" /> */}
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
      // </div>
    );
  }
}

render(<App />, document.getElementById('app'));
