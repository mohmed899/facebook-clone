import axios from 'axios'

const baseURL = "http://localhost:3001/conversations/"
const PostApi = {
    AddConversation: async (conv) => {  
        const res = await axios.post(baseURL, conv);
    },
    GetUserConversaion: async (userId) => {
        try {
            const posts = await axios.get(baseURL+userId);
            return posts.data;
        } catch (error) {
            console.log(error.message)
        }
    },
   

}

export default PostApi