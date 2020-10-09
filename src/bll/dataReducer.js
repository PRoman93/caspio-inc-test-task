import {
    ADD_NEW_COMMENT,
    GET_AUTH_DATA,
    GET_DATA,
    GET_SINGLE_POST,
    SET_LOGIN_DATA,
    SHOW_COMMENTS
} from "../accets/contstants";
import {api, authApi} from "../dal/api";

const initialState = {
    myPage: {
        posts: []
    },
    authData: {},
    post: {
        id: null,
        title:'',
        author:'',
        comments:[{author: '', body: '', id: null}]

    },
    posts: [{
        id: null,
        title: '',
        author: '',
        comments: [{author: '', body: '', id: null}]
    }],
    profile: {}
}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_DATA: {
            return {
                state, authData: action.authData
            }
        }
        case SET_LOGIN_DATA: {
            debugger
            return {
                state, authData: action.authData
            }
        }
        case GET_DATA: {
            return {
                ...state, posts: action.data.result
            }
        }
        case GET_SINGLE_POST: {
            debugger
            return {
                ...state, post: action.post.result
            }
        }
        case ADD_NEW_COMMENT: {
            debugger
            return {
                ...state, posts: state.posts.map(post => {
                    if (post.id === action.id) {
                        debugger
                        return {
                            ...state, comments: [...post.comments, action.comment]
                        }
                    }
                })
            }
        }
    }
    return state
}
export default dataReducer
const getDataSuccess = (data) => ({type: GET_DATA, data})
const getSinglePostSuccess = (post) => ({type: GET_SINGLE_POST, post})
const addNewCommentSuccess = (comment, id) => ({type: ADD_NEW_COMMENT, comment, id})
const getAuthDataSuccess = (authData) => ({type: GET_AUTH_DATA, authData})
const loginSuccess = (nickname, email, password) => ({
    type: GET_AUTH_DATA,
    authData: {nickname, email, password, isAuth: true}
})


export const getAuthData = () => async (dispatch) => {
    debugger
    const result = await authApi.getAuthData()
    dispatch(getAuthDataSuccess(result))
}
export const login = (nickname, email, password) => async (dispatch) => {
    debugger
    const result = await authApi.login(nickname, email, password)
    dispatch(loginSuccess(result))
}
export const getData = () => async (dispatch) => {
    debugger
    const result = await api.getPosts()
    dispatch(getDataSuccess(result))
}
export const getSinglePost = (id) => async (dispatch) => {
    debugger
    const result = await api.getSinglePost(id)
    dispatch(getSinglePostSuccess(result))
}
export const addNewComment = (comment, id) => async (dispatch) => {
    debugger
    const result = await api.addNewComment(comment, id)
    dispatch(addNewCommentSuccess(result))
}
