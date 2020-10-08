import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})


export const api = {
    getData() {
        return instance.get('posts').then(res => {
            const result = res.data
            return {
                result
            }
        })
    },
    getSinglePost(id) {
        debugger
        return instance.get(`posts?postId=${id}`).then(res => {
            const result = res.data
            return {
                result
            }
        })
    },
    addNewComment(comment, id) {
        debugger
        return instance.patch(`posts/${id}`,  {
                "comments": [{body: comment, id: id}]
            })
            .then(res => res.data)
            .catch(err => alert(err))
    }
    // addNewComment(comment, id) {
    //     debugger
    //     return instance.patch(`posts?postId=${id}?comments`, {body: comment, id:3}).then(res=>res.data).catch(err=>alert(err))
    // }
}
