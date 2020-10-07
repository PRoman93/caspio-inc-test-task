import {GET_DATA, GET_SINGLE_POST, SHOW_COMMENTS} from "../accets/contstants";
import {api} from "../dal/api";

const initialState = {
    data: {
        posts: [
            {comments: []}
        ],
        comments: [],
        profile: {}
    }
}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            // debugger
            return {
                ...state, data: action.data.result
            }
        }
        case GET_SINGLE_POST: {
            debugger
            return {
                ...state, post: action.posts.result.filter(post => post.postId === action.id)
            }
        }
        case SHOW_COMMENTS: {
            // debugger
            return {
                ...state, data: action.data.result.map(c => {
                    if (c.postId === action.id) {
                        debugger
                        return {
                            ...c, comments: action.comments
                        }
                    } else {
                        debugger
                        return {
                            ...c
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
const showCommentsSuccess = (id, post) => ({type: SHOW_COMMENTS, id})
const getSinglePostSuccess = (posts) => ({type: GET_SINGLE_POST, posts})

export const getData = () => async (dispatch) => {
    const result = await api.getData()
    dispatch(getDataSuccess(result))
}
export const showCommentsById = (id) => async (dispatch) => {
    debugger
    const result = await api.showCommentsById(id)
    dispatch(showCommentsSuccess(result))
}
export const getSinglePost = () => async (dispatch) => {
    debugger
    const result = await api.getSinglePost()
    dispatch(getSinglePostSuccess(result))
}
