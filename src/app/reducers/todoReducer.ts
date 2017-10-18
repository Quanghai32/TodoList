import { ADD_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO, ALL, COMPLETE, PENDING } from '../action/todoActions';
import { AppState } from '../state/app-state'

export const todos = (state = [], { type, payload }) => {
    //console.log('ACTION:', type, payload);
    switch (type) {
        case ADD_TODO:
            //return state.concat([Object.assign({}, payload, { id: state.length + 1 })]);
            return [...state, { id: state.length + 1, text: payload.text, completed: false }]
        case UPDATE_TODO:
            return state.map(todo => {
                return todo.id !== payload.id ? todo : Object.assign({}, todo, payload)
            });
        case COMPLETE_TODO:
            return state.map(todo => {
                return todo.id !== payload.id ? todo : Object.assign({}, todo, { completed: true })
            });
        case DELETE_TODO:
            return state.filter(todo => todo.id !== payload.id);
        default:
            return state;
    }
}


export const visibilityFilter = (state = (todo) => true, { type, payload }) => {
    switch (type) {
        case ALL:
            return (todo) => true;
        case COMPLETE:
            return (todo) => todo.completed;
        case PENDING:
            return (todo) => !todo.completed;
        default:
            return state;
    }
}