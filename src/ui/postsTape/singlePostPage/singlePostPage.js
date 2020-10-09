import React, {useState} from "react";

const SinglePostPage = (props) => {
    console.log(props.post[0])

    const [newComment, setNewComment] = useState('')

    const addNewComment = () => {
        debugger
        props.onAddNewComment(newComment, props.post[0].id)
        setNewComment('')
    }
    const onNewCommentAdd = (e) => {
        setNewComment(e.currentTarget.value)
    }
    const comments = props.post[0].comments.map(comment => <div>{comment.body}</div>)
    return (
        <div>
            <h3>{props.post[0].title}</h3>
            <h3>{props.post[0].author}</h3>
            <div>{comments}</div>
            <div>
                <input type="text" value={newComment} onChange={onNewCommentAdd}/>
                <button onClick={addNewComment}>add comment</button>
            </div>
            {/*<h3>yo</h3>*/}
        </div>
    )
}
export default SinglePostPage
