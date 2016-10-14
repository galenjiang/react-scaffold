import { combineReducers } from 'redux';
import { ActionTypes, VisibilityFilters } from '../constants';

const { SHOW_ALL } = VisibilityFilters;
const { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } = ActionTypes;


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

// function toddoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action),
//   };
// }

const toddoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default toddoApp;
