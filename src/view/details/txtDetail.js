import React, {Component} from "react"
import {Link} from "react-router-dom";
import { Card, Avatar } from 'antd';
import TxtTag from '../public/txtTag'

class TxtDetails extends Component {
    render (){
        let {loading,data} = this.props;
        let {author,create_at,content} = data
        const title = <div>
            <h1>{data.title}</h1>
            <div style={ {display:'flex',alignItems:'center'} }>
                <TxtTag data={data} />
                <Avatar src={author.avatar_url} />
                <Link 
                    to={"/user/"+author.loginname}>
                    {author.loginname}
                </Link>
                发表于：{create_at.split('T')[0]}
            </div>
        </div>
        return <div className="wrap">
            <Card
                loading = {loading}
                title={title}
            >
                <div 
                    dangerouslySetInnerHTML={ {__html:content} }>
                </div>
            </Card>
        </div>
    }
}

export default TxtDetails;