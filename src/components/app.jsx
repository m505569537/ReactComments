import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import NameComment  from './nameComment.jsx'
import CommentControl  from './commentControl.jsx'


export default class App extends Component {

	static propTypes = {
		data: PropTypes.array.isRequired,
		//onAddClick: PropTypes.func.isRequired,
		//onDeleteClick: PropTypes.func.isRequired,
		toaddcomment:PropTypes.func.isRequired,
		todeletecomment:PropTypes.func.isRequired,
	};

	render (){
		const {data,toaddcomment,todeletecomment} = this.props;
		return (
			<div className='app'>
				<div className='top'>请发表对React的评价</div>
				<div className='content'>
					<NameComment add={toaddcomment} />
					<CommentControl usercomments={data} deleteComment={todeletecomment} />
				</div>
			</div>
		)
	}
}

