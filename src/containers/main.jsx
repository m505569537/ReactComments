//import React from 'react';
import {connect} from 'react-redux';

import App from '../components/app.jsx'
import {todeletecomment, toaddcomment} from '../redux/actions.jsx'

/*
const mapStateToProps = (state) => {
	return {
		data: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddClick: (object) => {
			dispatch(toaddcomment(object))
		},
		onDeleteClick: (index) => {
			dispatch(todeletecomment(index))
		}
	}
}

const Main = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
*/

/*
	这些东西全部传入到App的props中去了
	this.props = {
	 data: state,
	 todeletecomment: todeletecomment,
	 toaddcomment: toaddcomment
	}
*/
const Main = connect(
	state => ({data: state}),
	{todeletecomment, toaddcomment}
)(App)

export default Main