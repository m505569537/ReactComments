//import {toaddcomment, todeletecomment} from './actions.jsx'
//不需要import actions ，因为dispatch会自动将action传给reducer
const usercomments=[
			{
				name: 'Tom',
				comment: 'React真不错'
			},
			{
				name:'June',
				comment:'我觉得ok'
			}
];


 const operateComment = (state=usercomments, action) => {
	switch(action.type){
		case 'ADD_COMMENT':
			return [action.data, ...state];
		case 'DELETE_COMMENT':
			/*要认真确认index代表的是什么，不要错误的以为index就代表数组序号
				这里 index 代表着数字中的一个个元素，即对象
				这里有两种写法，
				第一种就是使用一个形参，代表对象，来实现
			return state.filter((index) => index!==state[action.data]);
				第二种就是设置两个参数，第一个表示对象，第二个表示序号
			*/
			return state.filter((data, index) => index!==action.data);
		default:
		    return state;
	}
}

export default operateComment;