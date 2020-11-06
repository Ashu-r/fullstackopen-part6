export const createAnecdote = (data) => {
	return {
		type: 'NEW_ANECDOTE',
		data,
	};
};

export const addVote = (id) => {
	return {
		type: 'ADD_VOTE',
		id,
	};
};

export const initializeAnecdotes = (ane) => {
	return {
		type: 'INIT_ANECDOTE',
		data: ane,
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
