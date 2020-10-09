import React from "react";
import s from './postsTape.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {SINGLE_POST_PAGE} from "../../accets/contstants";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {getSinglePost} from "../../bll/dataReducer";
import SinglePostPageContainer from "./singlePostPage/singlePostPageContainer";

const PostsTape = (props) => {


    const history = useHistory()
    const dispatch = useDispatch()
    const onPostSelectClick = (id) => {
        debugger
        history.push(SINGLE_POST_PAGE)
        // dispatch(getSinglePost(id))
    }
    const renderData = props.data.map(el =>
        <div className={s.singlePost} key={el.id} id={el.id}
             onClick={() => history.push(`${SINGLE_POST_PAGE}/${el.id}`)}>
            <div><strong>{el.author}</strong></div>
            <div>{el.title}</div>
        </div>)

    return (
        <div className={s.tapeWrapper}>
            <div className={s.postsWrapper}>
                {renderData}
                {/*<SinglePostPageContainer onPostSelectClick={onPostSelectClick}/>*/}
            </div>
        </div>

    )
}
export default PostsTape
