import React, {useEffect} from "react";
import MyPosts from "./myPosts";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_PAGE} from "../../accets/contstants";
import {Redirect} from "react-router-dom";
import {getAuthData} from "../../bll/dataReducer";

const MyPostsContainer = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthData())
    }, [])

    const authData = useSelector(state => state.reducer.authData)
    const myPosts = useSelector(state => state.reducer.myPage.posts)
    console.log(myPosts)

    if (!authData.isAuth) {
        return <Redirect to={LOGIN_PAGE}/>
    }

    return (
        <MyPosts myPosts={myPosts}/>
    )
}
export default MyPostsContainer
