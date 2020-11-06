export const filterChange = (value) => {
	return {
		type: 'FILTER_CHANGE',
		filter: value,
	};
};

const reducer = (state = 'ALL', action) => {
	switch (action.type) {
		case 'FILTER_CHANGE': {
			return action.filter;
		}
		default:
			return state;
	}
};

export default reducer;
