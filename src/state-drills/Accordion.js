import React from 'react';

export default class Accordion extends React.Component {

  render() {
    console.log(this.props.sections.title);
    return (
      <ul>
        <li>
          <button>Hello</button>
        </li>
      </ul>
    )
  }
};