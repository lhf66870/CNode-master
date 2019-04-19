import React, {Component} from "react"
import { Card } from 'antd';

class PublicCard extends Component{
    render(){
        let data = this.props.data
        return (<div className="wrap">
        {data.map( (item,index) => 
            <Card
                title={item.title}
                loading={false}
                type="inner"
                key={index}
            >
                <p dangerouslySetInnerHTML={
                    {__html: item.content}
                }></p>
            </Card>
        )}
    </div>)
    }
}
export default PublicCard;