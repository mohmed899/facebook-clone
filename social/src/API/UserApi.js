import axios from 'axios'

const baseURL = "http://localhost:3001/users/"
const Api = {
    register: async (user) => {
        try {
            const res = await axios.post(baseURL, user);
            return res;
        } catch (error) {
            alert(error.message);
        }

    },
   login:async(LoginData)=>{
    try {
        const res = await axios.get(baseURL+'/LogIn', {params:LoginData});
        return res;
    } catch (error) {
        alert(error.message);
    }
   },
    getUserById: async (id) => {
        //console.log("ddd")
        const res = await axios.get(baseURL + id);
        return res.data
    },
    getUsersByOPtions: async (options) => {

        // const res= await axios.get(baseURL+'?isFriend=true')
        console.log(options)
        const res = await axios.get(baseURL, { params: options });
        return res.data
    },




    addFriend: async (id, options) => {
        const res = await axios.patch(baseURL + id, options)
        console.log(res.data)
    },

    




}

export default Api