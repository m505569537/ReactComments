import React from 'react';
import PropTypes from 'prop-types'

import SingleComment from './singleComment.jsx'

export default class CommentControl extends React.Component {

    static propTypes = {
        usercomments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }

    render() {
        const {usercomments, deleteComment} = this.props;
        const display = (usercomments.length === 0) ? "block" : "none";
        return (
            <div className='right'>
				<p>评论回复：</p>
				<div className='comment_box'>
					<ul ref={ul => this.ul = ul}>
						{usercomments.map((usercomment, index) => <SingleComment key={index} usco={usercomment} deleteComment={deleteComment} index={index} />)}
					</ul>	
					<div className='no_con' style={{display}}>暂无评论，请在左侧添加评论</div>					
				</div>
			</div>
        )
    }
}
