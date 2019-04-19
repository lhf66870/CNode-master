import React, {Component} from "react"
// import data from './data'
import TxtDetails from './txtDetail'
import ReplyList from './replyList';
import {
    connect
} from 'react-redux'
import axios from "axios"

class Details extends Component {
    
    constructor(arg){
        super(arg)
        let id = this.props.match.params.id
        this.getData(id)
    }
    // shouldComponentUpdate(nextProps,nextState){
        
    // }
    getData(id){
        this.props.dispatch((dispatch) =>{
            dispatch({
                type:"DETAIL_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
            .then((res)=>{
                dispatch({
                    type:'DETAIL_UPDATA_SUCCESS',
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:'DETAIL_UPDATA_ERROR',
                    data:error
                })
            })
        })
    }
    render (){
        let {loading,data} = this.props
        return <div className="wrap">
            <TxtDetails 
                loading={loading}
                data={data} 
            />
            <ReplyList 
                loading = {loading}
                replies = {data.replies}
                replyCount = {data.reply_count}
            />
        </div>
    }
}

export default connect(state => state.details)(Details);