import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../constants';

import { addTodo, toggleTodo, setVisibilityFilter } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

class App extends Component {
  constructor() {
    super();
    console.log(1)
  }
  static propTypes = {
    visibilityFilter: PropTypes.oneOf([
      SHOW_ALL,
      SHOW_COMPLETED,
      SHOW_ACTIVE,
    ]),
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })),
  }

  componentWillMount() {
    console.log(2)
  }

  render() {
    const {
      dispatch,
      // visibleTodos,
      // visibilityFilter,
    } = this.props;
    console.log(this.props);
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={this.props.visibleTodos} onTodoClick={index => dispatch(toggleTodo(index))} />
        <Footer filter={this.props.visibilityFilter} onFilterChange={filter => dispatch(setVisibilityFilter(filter))} />
      </div>
    );
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

function select(state) {
  return {
    visibilityFilter: state.visibilityFilter,
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
  };
}

export default connect(select)(App);
