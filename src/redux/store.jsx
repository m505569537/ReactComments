import {createStore} from 'redux';
import operateComment from './reducers.jsx'
import {composeWithDevTools} from 'redux-devtools-extension'

export const store = createStore(
	operateComment,
	composeWithDevTools()
);