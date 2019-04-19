function user(state={
    data:{
        avatar_url:'', 
        loginname:'', 
        create_at:'', 
        score:'', 
        recent_topics:[], 
        recent_replies:[]
    }
},action){
    switch (action.type){
        case "USER_UPDATA":
            return {
                loading: true,
                data: state.data
            }
        case "USER_UPDATA_SUCCESS":
            return {
                loading: false,
                data: action.data.data
            }
        case "USER_UPDATA_ERROR":
            return {
                loading: false,
                data:{
                    avatar_url:'', 
                    loginname:'', 
                    create_at:'', 
                    score:'', 
                    recent_topics:[], 
                    recent_replies:[]
                }
            }
        default:
            return state
    }
}
export default user