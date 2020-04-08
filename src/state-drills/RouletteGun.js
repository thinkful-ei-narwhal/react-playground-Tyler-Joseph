import React from 'react';

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  actions = () => {
    if (this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger!...';
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!';
    } else {
      return 'You\'re safe!'
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handlePullTrigger = () => {
    this.setState({
      spinningTheChamber: true
    })

    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      });
    }, 2000);
  }

  render() {
    console.log(this.state.chamber);
    return (
      <div>
        <p>{this.actions()}</p>
        <button onClick={this.handlePullTrigger}>Pull the trigger</button>
      </div>
    );
  }
}