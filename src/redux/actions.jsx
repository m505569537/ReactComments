import {ADD_COMMENT, DELETE_COMMENT}  from './action-types.jsx'

//传入对象
export const toaddcomment = (object) => ({type: ADD_COMMENT, data: object});

//传入序号
export const todeletecomment = (index) => ({type: DELETE_COMMENT, data:index});