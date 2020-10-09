import React from "react";

const MyPosts = (props) => {

    const posts = props.myPosts.map(post => <div>{post.body}</div>)
    return (
        <div>
            <div>my posts</div>
            <div>{posts}</div>
        </div>

    )
}
export default MyPosts
