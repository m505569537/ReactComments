import React from 'react';
import PropTypes from 'prop-types'

export default class SingleComment extends React.Component {

	static propTypes = {
	usco: PropTypes.object.isRequired,
	deleteComment: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
	}

	handleDelete = () => {
		const {deleteComment, index} = this.props;
		if(window.confirm('你确定要删除这条评论吗？')){
			deleteComment(index);
		}

	}



	render(){
		const {usco} = this.props;
		return (
			<li className='single'>
				<p className="pna">{usco.name}说<span className='delete' onClick={this.handleDelete}>删除</span></p>
				<p className="pco">{usco.comment}</p>
			</li>
		)
	}
}
