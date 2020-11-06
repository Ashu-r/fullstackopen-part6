// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import anecdoteReducer, {
	initializeAnecdotes,
} from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';
import anecdoteService from './services/anecdotes';

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationReducer,
	filter: filterReducer,
});

const store = createStore(reducer);
anecdoteService
	.getAll()
	.then((ane) => store.dispatch(initializeAnecdotes(ane)));

export default store;
