import React, { Component, PropTypes } from 'react';

class Child extends Component {

  static propTypes = {
    childContent: PropTypes.string.isRequired,
  }

  static defaultProps = {
    childContent: 'abc',
  }

  constructor() {
    super();
    console.log(this.props, this.state);
  }

  state = {
    content: 'galen',
  }

  h1ClickHandler = () => {
    alert(1);
  }

  h2ClickHandler = () => {
    alert(2);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.h1ClickHandler}>{this.props.childContent}</h1>
        <h2 onClick={this.h2ClickHandler}>{this.state.content}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Child;
