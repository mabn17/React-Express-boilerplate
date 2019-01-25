import React, { Component } from 'react';

class HelloWorld extends Component {
  componentDidMount() {
    document.title = 'React Route Test';
  }

  render() {
    return (
      <header className="header py-2">
        <p>Hello World</p>
      </header>
    );
  }
}

export default HelloWorld;
