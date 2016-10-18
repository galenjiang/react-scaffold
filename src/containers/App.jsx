import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../constants';
import '../assets/reset.scss';

import { addTodo, toggleTodo, setVisibilityFilter } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

function App(props) {
  const {
    dispatch,
    // visibleTodos,
    // visibilityFilter,
  } = props;
  console.log(222)
  return (
    <div className="test">
      <AddTodo onAddClick={text => dispatch(addTodo(text))} />
      <TodoList todos={props.visibleTodos} onTodoClick={index => dispatch(toggleTodo(index))} />
      <Footer filter={props.visibilityFilter} onFilterChange={filter => dispatch(setVisibilityFilter(filter))} />
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  visibilityFilter: PropTypes.oneOf([
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
  ]),
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
};

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
