import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0
    }

    text = () => {
        if (this.state.count >= 8) {
            return "BOOM!"
        } else if (this.state.count % 2 === 0) {
            return "tick"
        } else {
            return "tock"
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    
    render() {
        return (
            <div>
                <p>{this.text()}</p>
            </div>
        )
    }
}