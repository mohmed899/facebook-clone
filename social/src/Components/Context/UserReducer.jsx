const   UserRducer =(state,action)=>{
    switch (action.type) {
        case "logIn":
            console.log(state)
            console.log(action)
            return {
                user:action.payload,
                test:"ayhaga"
            };
        default:
            return {p:"ll"}
            
    }
}
export default UserRducer 