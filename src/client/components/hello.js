import React, { Component } from 'react';

export default class HelloWorld extends Component {
  componentDidMount() {
    document.title = 'React Route Test';
  }

  render = () => <h1 className="header py-2">Hello World</h1>;
}
