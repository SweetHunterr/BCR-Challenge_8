import { ALL_CARS } from '../actions';

function carReducers(state = { data: [] }, action) {
	switch (action.type) {
	case ALL_CARS:
		return { ...state, data: action.payload };
	default:
		return state;
	}
}

export default carReducers;