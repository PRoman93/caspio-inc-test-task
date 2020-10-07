import React, {useEffect, useState} from "react";
import {getData, showCommentsById} from "../../bll/dataReducer";
import {useDispatch, useSelector} from "react-redux";
import PostsTape from "./postsTape";

const PostTapeContainer = (props) => {

    const [comments, setComments] = useState(false)
    useEffect(() => {
        dispatch(getData())
    }, [])
    const dispatch = useDispatch()
    const data = useSelector(state => state.reducer.data)
    console.log(data.posts)

    const onShowCommentsClick = (id) => {
        debugger
        dispatch(showCommentsById(id))
        setComments(true)
    }


    return(
        <PostsTape data={data}/>
    )
}
export default PostTapeContainer
