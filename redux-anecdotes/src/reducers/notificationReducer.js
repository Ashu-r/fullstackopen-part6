export const newNotification = (message) => {
	return {
		type: 'new',
		message,
	};
};

const reducer = (state = '', action) => {
	switch (action.type) {
		case 'new': {
			return action.message;
		}
		default:
			return state;
	}
};

export default reducer;
