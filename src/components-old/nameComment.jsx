import React from 'react';
import PropTypes from 'prop-types'

export default class NameComment extends React.Component {
	/*
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	} */
	
	//定义输入的数据属性
	//NameComment.propTypes 可以看出，它不是对象的属性，而是类的属性
	static propTypes = {
	add: PropTypes.func.isRequired
	}

	handleSubmit = () => {
		let name = this.iname.value;
		let comment = this.incomment.value;
		if(!name||!comment){
			return;
		}
		this.props.add(name, comment);
		this.iname.value = '';
		this.incomment.value = '';
	}

	render(){
		return (
			<div className='left'>
				<p>用户名</p>
				<input type='text' ref={input => this.iname = input} />
				<p>评论内容</p>
				<textarea  className='co_content' ref={textarea => this.incomment = textarea}></textarea>
				<br />
				<input type='submit' className='sub' value='提交' onClick={this.handleSubmit} />
			</div>
		)
	}
}
