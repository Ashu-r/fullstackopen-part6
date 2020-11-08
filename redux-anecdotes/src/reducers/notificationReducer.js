export const newNotification = (message, time) => {
	return (dispatch) => {
		dispatch({
			type: 'new',
			message,
		});
		setTimeout(() => {
			dispatch({
				type: 'new',
				message: '',
			});
		}, time * 1000);
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
