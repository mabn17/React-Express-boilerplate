import React, { Component } from 'react';

export default class Hello extends Component {
  componentDidMount() {
    document.title = 'React Route Test';
  }

  render = () => (
    <header className="header py-2">
      <p>Hello World</p>
    </header>
  );
}
