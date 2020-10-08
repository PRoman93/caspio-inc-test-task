import React, {useEffect} from "react";
import SinglePostPage from "./singlePostPage";
import {useDispatch, useSelector} from "react-redux";
import {addNewComment, getSinglePost} from "../../../bll/dataReducer";

import {useParams} from "react-router-dom";

const SinglePostPageContainer = (props) => {

    // const {id} = useParams();

    const dispatch = useDispatch()

    const post = useSelector(state => state.reducer.post)
    console.log(post)
    const onAddNewComment = (comment, id) => {
        debugger
        dispatch(addNewComment(comment, id))
    }
    useEffect(() => {
        dispatch(getSinglePost(props.match.params.id))
    }, [props.match.params.id])

    return (
        <SinglePostPage onAddNewComment={onAddNewComment} post={post}/>
    )
}
export default SinglePostPageContainer
