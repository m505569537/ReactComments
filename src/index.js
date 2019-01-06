import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Main from './containers/main.jsx'
import {
  Provider
} from 'react-redux'
import {
  store
} from './redux/store.jsx'


/*该App是实现用户添加评论的功能
  流程
  1.拆分组件
  从功能层面分为两个组件：输入组件和输出组件
  输入组件包含：输入用户名组件和输入评论组件
  输出组件只包含：评论控制组件
  同时输入和输出组件又属于app组件

  2.静态页面

  3.动态数据初始化显示
  	输入组件输入的是一个个对象:{name:xx, comment:xx}，多个对象组合为数组
  	输出组件从数组中拿取数据用于显示
  	所以将这个数组存储到父组件app的state中去

  4.实现交互功能
  	可以看出页面的渲染，效果的展示是根据app中的state里的内容来变换的，
  	所以添加和删除评论，只需要修改数组中的元素就行了
*/

ReactDOM.render(
  <Provider store={store}>
      <Main />
  </Provider>, document.getElementById('root'));