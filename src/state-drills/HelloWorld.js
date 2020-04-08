import React from 'react';

export default class HelloWorld extends React.Component {
  state = {
    who: 'World',
  }

  handleClick = e => {
    this.setState({
      who: e.target.name,
    })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={e => this.handleClick(e)} name="World">World</button>
        <button onClick={e => this.handleClick(e)} name="Friend">Friend</button>
        <button onClick={e => this.handleClick(e)} name="React">React</button>
      </div>
    );
  }
};