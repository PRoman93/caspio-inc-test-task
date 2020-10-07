import React, {useEffect} from "react";
import SinglePostPage from "./singlePostPage";
import {useDispatch, useSelector} from "react-redux";
import {getSinglePost} from "../../../bll/dataReducer";

const SinglePostPageContainer = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.reducer.post)
    console.log(post)
    useEffect(()=>{
        dispatch(getSinglePost())
    },[])
    return(
        <SinglePostPage/>
    )
}
export default SinglePostPageContainer
