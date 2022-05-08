import axios from 'axios'

const baseURL = "http://localhost:3001/posts/"
const PostApi = {
    AddPost: async (post) => {
        try {
            
            const res = await axios.post(baseURL, post);
        } catch (error) {
            alert(error)
        }
        
    },
    GetAllPosts: async () => {
        try {
            console.log("posts")
            const posts = await axios.get(baseURL);
            return posts.data;
        } catch (error) {
            console.log(error.message)
        }
    },
    UpdatePostLiks: async (id,post) => {
        try {
             await axios.patch(`${baseURL}/${id}`,post)
          
        } catch (error) {
            console.log(error.message)
        }
    },
    getUserPosts:async(id)=>{
        try {
         
            const posts = await axios.get(`${baseURL}/${id}`);
            return posts.data;
        } catch (error) {
            console.log(error.message)
        }
    }

}

export default PostApi