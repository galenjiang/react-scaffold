import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './components/Child';

class App extends Component {

  state = {
    parentContent: 'hello',
    childContent: 'world',
  };

  render() {
    return (
      <div>
        {this.state.parentContent}
        <Child {...this.state}>
          <h3>你好</h3>
        </Child>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
