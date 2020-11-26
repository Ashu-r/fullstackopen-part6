import anecdoteService from '../services/anecdotes';

export const createAnecdote = (content) => {
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.createNew(content);
		console.log(newAnecdote);
		dispatch({
			type: 'NEW_ANECDOTE',
			data: newAnecdote,
		});
	};
};

export const addVote = (id) => {
	return async (dispatch) => {
		await anecdoteService.upVote(id);

		dispatch({
			type: 'ADD_VOTE',
			id,
		});
	};
};

export const initializeAnecdotes = (ane) => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll();

		dispatch({
			type: 'INIT_ANECDOTE',
			data: anecdotes,
		});
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_VOTE': {
			const { id } = action;
			const anecdoteToAddVote = state.find((n) => n.id === id);
			const changedAnecdote = {
				...anecdoteToAddVote,
				votes: anecdoteToAddVote.votes + 1,
			};
			return state.map((ane) =>
				ane.id !== id ? ane : changedAnecdote
			);
		}
		case 'NEW_ANECDOTE': {
			return state.concat(action.data);
		}
		case 'INIT_ANECDOTE':
			return action.data;
		default:
			return state;
	}
};

export default reducer;
