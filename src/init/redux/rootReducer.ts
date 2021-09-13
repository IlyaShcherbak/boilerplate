// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { studentReducer as students } from '../../bus/student/reducer';
import { todosReducer as todos } from '../../bus/todos/reducer';

export const rootReducer = combineReducers({
    togglers,
    todos,
    students,
});

export type AppState = ReturnType<typeof rootReducer>;
