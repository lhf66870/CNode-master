function details(state={
    loading:true,
    data:{
        author:{
            loginname:'',
            avatar_url:''
        },
        create_at:'',
        replies:[],
        reply_count:0,
        good:true
    }
},action){
    switch (action.type){
        case "DETAIL_UPDATA":
            return {
                loading: true,
                data: state.data
            }
        case "DETAIL_UPDATA_SUCCESS":
            return {
                loading: false,
                data: action.data.data
            }
        case "DETAIL_UPDATA_ERROR":
            return {
                loading: false,
                data:{
                    author:{
                        loginname:'',
                        avatar_url:''
                    },
                    create_at:'',
                    replies:[],
                    reply_count:0,
                    good:true
                }
            }
        default:
            return state
    }
}
export default details