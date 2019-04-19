import React, {
    Component
} from 'react'
// import data from './data'
import axios from "axios"
import {
    Link
} from "react-router-dom";
import {
    List,
    Avatar
} from "antd";
import TxtTag from "../public/txtTag";
import {
    connect
} from 'react-redux'

class IndexList extends Component {
    constructor(props) {
        super(props);
        this.isStart = true
        this.state = {
            page: 1,
            pageSize:10
        }
        this.getData(this.props.tab,this.state.page,this.state.pageSize)
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log(nextState)
        this.isStart = false
        if(this.state.page !== nextState.page){
            this.getData(nextProps.tab,nextState.page,nextState.pageSize,)
            return false
        }
        if(this.state.pageSize !== nextState.pageSize){
            this.getData(nextProps.tab,nextState.page,nextState.pageSize,)
            return false
        }
        if (this.props.tab !== nextProps.tab) {
            this.setState({
                page:1,
                pageSize:10
            })
            this.getData(nextProps.tab,1,10)
            return false
        }
        return true
    }
    getData(tab,page,pageSize) {
        this.props.dispatch((dispatch) => {
            dispatch({
                type: "LIST_UPDATA",
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${pageSize}`)
            .then((res) => {
                dispatch({
                    type: "LIST_UPDATA_SUCCESS",
                    data: res.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "LIST_UPDATA_ERROR",
                })
            })
        })
    }
    render() {
        let {
            loading,
            data
        } = this.props;
        let pagination ={
            current:this.state.page,
            pageSize:this.state.pageSize,
            total:200,
            showSizeChanger:true,
            onChange:((current,pageSize)=>{
                this.setState({
                    page:current,
                    pageSize:pageSize,
                })
            }),
            onShowSizeChange:((current,pageSize)=>{
                this.setState({
                    page:1,
                    pageSize:pageSize
                })
            })
        }
        return (
            <List
                loading = {loading}
                dataSource = {data}
                pagination = { this.isStart?false:pagination }
                itemLayout = "horizontal"
                renderItem = {item => ( 
                    <List.Item 
                        actions = {[`回复:${item.reply_count}`, `访问:${item.visit_count}`]}
                        key = {item.id} 
                    >
                        <List.Item.Meta 
                            avatar = {<Avatar src = {item.author.avatar_url}/>}
                            title = {<div><TxtTag data = {item} /><Link to = {"/details/" + item.id} > {item.title} </Link> </div>}
                            description = {(<p><Link to = {"/user/" + item.author.loginname} > {item.author.loginname} </Link>发表于： { item.create_at.split('T')[0]} </p>)} 
                        />
                    </List.Item>
                )}
            />
        )
    }
}
export default connect(state => state.list)(IndexList)