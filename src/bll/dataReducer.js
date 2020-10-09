import {ADD_NEW_COMMENT, GET_DATA, GET_SINGLE_POST, SHOW_COMMENTS} from "../accets/contstants";
import {api} from "../dal/api";

const initialState = {
    post: [
        {
            id: null,
            title: '',
            author: '',
            comments: [{body: '', id: null}]
        }
    ],
    posts: [ {
        id: null,
        title: '',
        author: '',
        comments: [{body: '', id: null}]
    }],
    profile: {}
}
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const getData = () => async (dispatch) => {
    const result = await api.getData()
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
