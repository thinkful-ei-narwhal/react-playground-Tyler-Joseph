import React from 'react';


export default class Accordion extends React.Component {
  store = [...this.props.sections]
  
  state = {
    lastClickedButton: null
  }

  handleClick = (index) => {
    this.setState({
      lastClickedButton: index
    })
  }


  actions = (data, index, lastClickedButton) => {
    return ( 
        <li key={index}>
          <button name={index} onClick={() => this.handleClick(index)}>{data.title}</button>
          {(lastClickedButton === index) && <p>{data.content}</p>}
        </li>
    )
  }

  render() {
    const { lastClickedButton } = this.state
    return (
      <ul>
      {this.store.map((x, i) => this.actions(x, i, lastClickedButton))}
      </ul>
    )
  }
}