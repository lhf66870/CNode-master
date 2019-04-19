import React, {Component} from "react"
// import data from './data'
import {Row, Col, Avatar} from "antd";
import UserList from "./userList"
import axios from "axios"
import {connect} from 'react-redux'

class User extends Component {
    constructor(props){
        super(props)
        let id = this.props.match.params.id
        this.getData(id)
    }
    shouldComponentUpdate(nextProps){
        let id = this.props.match.params.id;
        let nextId = nextProps.match.params.id;
        if(id !== nextId){
            this.getData(nextId)
            return false
        }
        return true
    }
    getData(id){
        this.props.dispatch((dispatch) =>{
            dispatch({
                type:"USER_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
            .then((res)=>{
                dispatch({
                    type:'USER_UPDATA_SUCCESS',
                    data:res.data
                })
            })
            .catch((error)=>{
                dispatch({
                    type:'USER_UPDATA_ERROR',
                    data:error
                })
            })
        })
    }
    render (){
        let {loading,data} = this.props
        let { avatar_url, loginname, create_at, score, recent_topics, recent_replies } = data
        return (<div className="wrap">
            <Avatar src={avatar_url} size={100} style={{display:'block',margin:'0 auto'}} />
            <Row className="userInfo">
                <Col md={8}>
                    用户名：<b>{loginname}</b>
                </Col>
                <Col md={8}>
                    积分：<b>{score}</b>
                </Col>
                <Col md={8}>
                    注册时间：<b>{create_at.split('T')[0]}</b>
                </Col>
            </Row>
            <UserList loading={loading} data={recent_topics} title="最近创建话题" />
            <UserList loading={loading} data={recent_replies} title="最近回复话题" />
        </div>)
    }
}

export default connect(state=>state.user)(User);