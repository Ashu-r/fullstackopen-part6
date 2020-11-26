let timeoutID;
export const newNotification = (message, time) => {
	return (dispatch) => {
		clearTimeout(timeoutID);
		dispatch({
			type: 'new',
			message,
		});
		timeoutID = setTimeout(() => {
			dispatch({
				type: 'new',
				message: '',
			});
		}, time * 1000);
		console.log(timeoutID);
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
