import axios from 'axios'

const baseURL = "http://localhost:3001/conversations/"
const PostApi = {
    AddConversation: async (conv) => {  
        const res = await axios.post(baseURL, conv);
        console.log(res)
    },
    GetUserConversaion: async (userId) => {
        try {
            const conversations = await axios.get(baseURL+userId);
            return conversations.data;
        } catch (error) {
            console.log(error.message)
        }
    },
    GetConversaionById: async (Id) => {
        try {
            const conversations = await axios.get(baseURL+"conv/"+Id);
            return conversations.data[0];
        } catch (error) {
            console.log(error.message)
        }
    },
   

}

export default PostApi