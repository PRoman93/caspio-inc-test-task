import React, {useState} from "react";

const SinglePostPage = (props) => {
    console.log(props.post.comments)

    const [newComment, setNewComment] = useState('')

    const addNewComment = () => {
        debugger
        props.onAddNewComment(newComment, props.post.id)
        setNewComment('')
    }
    const onNewCommentAdd = (e) => {
        setNewComment(e.currentTarget.value)
    }
    debugger
    const comments = props.post.comments.map(comment => <div>{comment.body}</div>)
    return (
        <div>
            <h3>{props.post.title}</h3>
            <h3>{props.post.author}</h3>
            <div>{comments}</div>
            <div>
                <input type="text" value={newComment} onChange={onNewCommentAdd}/>
                <button onClick={addNewComment}>add comment</button>
            </div>
        </div>
    )
}
export default SinglePostPage
