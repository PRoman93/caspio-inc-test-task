import React from "react";
import LoginPage from "./loginPage";
import {useDispatch} from "react-redux";
import {login} from "../../bll/dataReducer";

const LoginPageContainer = () => {

    const dispatch = useDispatch()

    const onAuthDataClick = (nickname, email, password) => {
        dispatch(login(nickname, email, password))
    }
    return (
        <LoginPage onAuthDataClick={onAuthDataClick}/>
    )
}
export default LoginPageContainer
