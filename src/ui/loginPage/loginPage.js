import React, {useState} from "react";

const LoginPage = (props) => {

    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onNicknameChange = (e) => {
        setNickname(e.currentTarget.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onAuthDataSend = () => {
        props.onAuthDataClick(nickname, email, password)
    }
    return (
        <div>
            <input type="text" placeholder='nickname' value={nickname} onChange={onNicknameChange}/>
            <input type="text" placeholder='email' value={email} onChange={onEmailChange}/>
            <input type="password" placeholder='password' value={password} onChange={onPasswordChange}/>
            <button onClick={onAuthDataSend}>login</button>
        </div>
    )
}
export default LoginPage
