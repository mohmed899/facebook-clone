import axios from 'axios'

const baseURL = "http://localhost:3001/messages/"
const MessageApi = {
    AddMessage: async (message) => {  
        const res = await axios.post(baseURL, message);
        console.log(res)
    },
    GetConvMessages: async (convId) => {
        try {
            const messages = await axios.get(baseURL+convId);
            return messages.data;
        } catch (error) {
            console.log(error.message)
        }
    },
    
   

}

export default MessageApi