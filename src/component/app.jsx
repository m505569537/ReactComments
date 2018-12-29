import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


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

//用户名和评论输入组件
class NameComment extends Component {
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

//评论控制组件
class CommentControl extends Component {

	static propTypes = {
	usercomments:PropTypes.array.isRequired,
	deleteComment:PropTypes.func.isRequired
	}

	render(){
		const {usercomments, deleteComment} = this.props;
		const display = (usercomments.length === 0) ? "block" : "none";
		return (
			<div className='right'>
				<p>评论回复：</p>
				<div className='comment_box'>
					<ul ref={ul => this.ul=ul}>
						{usercomments.map((usercomment, index) => <SingleComment key={index} usco={usercomment} deleteComment={deleteComment} index={index} />)}
					</ul>	
					<div className='no_con' style={{display}}>暂无评论，请在左侧添加评论</div>					
				</div>
			</div>
		)
	}
}

//单一评论组件
class SingleComment extends Component {

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