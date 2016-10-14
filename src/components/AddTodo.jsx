import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class AddTodo extends Component {

  static propTypes = {
    onAddClick: PropTypes.func.isRequired,
  }

  handleClick() {
    const node = findDOMNode(this.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref={(el) => { this.input = el; }} />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

}
