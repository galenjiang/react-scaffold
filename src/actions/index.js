import { ActionTypes } from '../constants';

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text,
  };
}
export function toggleTodo(index) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    index,
  };
}
export function setVisibilityFilter(filter) {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter,
  };
}
