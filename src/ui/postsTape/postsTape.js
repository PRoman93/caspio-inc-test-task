import React from "react";
import s from './postsTape.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {SINGLE_POST_PAGE} from "../../accets/contstants";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {getSinglePost} from "../../bll/dataReducer";

const PostsTape = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const onPostSelectClick = (id) => {
        debugger
        history.push(SINGLE_POST_PAGE)
        dispatch(getSinglePost(id))
    }
    const renderData = props.data.posts.map(el =>
        <div className={s.singlePost} key={el.postId} id={el.postId} onClick={onPostSelectClick(el.postId)}>
            <div><strong>{el.author}</strong></div>
            <div>{el.title}</div>
        </div>)

    return (
        <div className={s.tapeWrapper}>
            <div className={s.postsWrapper}>
                {renderData}
            </div>
        </div>

    )
}
export default PostsTape
