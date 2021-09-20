// Core
import { combineReducers } from 'redux';

// Reducers
import { togglersReducer as togglers } from '../../bus/client';
import { studentReducer as student } from '../../bus/student/reducer';
import { todosReducer as todos } from '../../bus/todos/reducer';
import { peopleReducer as people } from '../../bus/people/reducer';
import { filmsReducer as films } from '../../bus/films/reducer';

export const rootReducer = combineReducers({
    togglers,
    todos,
    student,
    people,
    films,
});

export type AppState = ReturnType<typeof rootReducer>;
