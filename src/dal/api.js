import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/data'
})


export const api = {
    getData() {
        return instance.get('').then(res => {
            // debugger
         const result = res.data
            return{
                result
            }
        })
    },
    showCommentsById() {
        return instance.get(``).then(res => {
            debugger
         const result = res.data.posts
            return{
                result
            }
        })
    },
    getSinglePost() {
        return instance.get(``).then(res => {
            debugger
         const result = res.data.posts
            return{
                result
            }
        })
    }
}
