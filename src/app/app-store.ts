import { todos, visibilityFilter } from './reducers/todoReducer';
import { undoable } from './reducers/undoableReducer'

export const appReducer = {
    todos,
    visibilityFilter
}