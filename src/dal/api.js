import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:3001/'
    baseURL: `http://my-json-server.typicode.com/PRoman93/caspio-inc-test-task/`
})


export const api = {
    getData() {
        return instance.get('posts/').then(res => {
            const result = res.data
            return {
                result
            }
        }).catch(err => alert(err))
    },
    getSinglePost(id) {
        return instance.get(`posts?${id}`).then(res => {
            debugger
            const result = res.data
            return {
                result
            }
        }).catch(err => alert(err))
    },
    addNewComment(comment, id) {
        debugger
        return instance.post(`posts?${id}?comments`, {
            comment
        })
            .then(res => res.data)
            .catch(err => alert(err))
    }
    // addNewComment(comment, id) {
    //     debugger
    //     return instance.patch(`posts?postId=${id}?comments`, {body: comment, id:3}).then(res=>res.data).catch(err=>alert(err))
    // }
}
