import React, {useEffect, useState} from "react";
import {getData} from "../../bll/dataReducer";
import {useDispatch, useSelector} from "react-redux";
import PostsTape from "./postsTape";

const PostTapeContainer = (props) => {

    const dispatch = useDispatch()
    const [comments, setComments] = useState(false)
    const posts = useSelector(state => state.reducer.posts)
    console.log('posts- ',posts)
    useEffect(() => {
        debugger
        dispatch(getData())
    }, [])






    return(
        <PostsTape data={posts}/>
    )
}
export default PostTapeContainer
