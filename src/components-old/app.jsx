import React, {Component} from 'react'
//import ReactDOM from 'react-dom'

import NameComment  from './nameComment.jsx'
import CommentControl  from './commentControl.jsx'


export default class App extends Component {
	/*
	constructor(props){
		super(props);
		this.state = {
			usercomments:[
			{
				name: 'Tom',
				comment: 'React真不错'
			},
			{
				name:'June',
				comment:'我觉得ok'
			}
			]
		}

		this.add = this.add.bind(this);
	}
 	*/
	//state属于对象的属性  this.state
	state = {
			usercomments:[
			{
				name: 'Tom',
				comment: 'React真不错'
			},
			{
				name:'June',
				comment:'我觉得ok'
			}
			]
	}

	add = (name, comment) => {
		const ob = {
			name:'',
			comment:''
		};
		ob.name = name;
		ob.comment = comment;
		const {usercomments} = this.state;
		usercomments.unshift(ob);
			//console.log(usercomments)
		this.setState({usercomments})
	}

	deleteComment = (index) => {
		const {usercomments} = this.state;
		usercomments.splice(index, 1);  //删除1个编号为index的数组元素
		this.setState({usercomments});
	}
	
	
	render (){
		const {usercomments} = this.state;
		return (
			<div className='app'>
				<div className='top'>请发表对React的评价</div>
				<div className='content'>
					<NameComment add={this.add} />
					<CommentControl usercomments={usercomments} deleteComment={this.deleteComment} />
				</div>
			</div>
		)
	}
}

/*
//评论控制组件
class CommentControl extends Component {
	render(){
		return (
			<div className='right'>
				<p>评论回复：</p>
				<div className='comment_box'>
					<ul>
						{this.props.usercomments.map((usercomment, index) => <li key={index}  id={'l' + index}>{<SingleComment usco={usercomment} lid={'l'+index} />}</li>)}
					</ul>
				</div>
			</div>
		)
	}
}

CommentControl.propTypes = {
	usercomments:PropTypes.array.isRequired
}

//单一评论组件
class SingleComment extends Component {
	constructor(props){
		super(props);

		this.destroyLi = this.destroyLi.bind(this);
	}

	destroyLi (){
		const {lid} = this.props;
		document.getElementById(lid).style.display = "none";
	}

	render(){
		const {usco} = this.props;
		return (
			<div className='single'>
				<p className="pna">{usco.name}说<span className='delete' onClick={this.destroyLi}>删除</span></p>
				<p className="pco">{usco.comment}</p>
			</div>
		)
	}
}

SingleComment.propTypes = {
	usco: PropTypes.object.isRequired
}
*/