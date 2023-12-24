import { combineReducers } from 'redux';
import carReducers from './car-reducers';

const reducers = combineReducers({
	dataCars: carReducers
});

export default reducers;