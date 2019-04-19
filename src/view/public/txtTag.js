import React, {Component} from 'react';
import { Tag } from "antd";
import typeTag from '../public/tab'
// const typeTag = {
//     good:{
//         color:'geekblue',
//         txt:'精华'
//     },
//     top:{
//         color:'red',
//         txt:'置顶'
//     },
//     job:{
//         color:'volcano',
//         txt:'招聘'
//     },
//     share:{
//         color:'gold',
//         txt:'分享'
//     },
//     ask:{
//         color:'magenta',
//         txt:'问答'
//     },
//     dev:{
//         color:'cyan',
//         txt:'测试'
//     }
// }
let getTab = (data) => {
    let nowTab = (data.good?
                "good":
                data.good?
                    "good":data.tab)
    return typeTag.filter((item) => item.tab === nowTab)[0];
}
class TxtTag extends Component{
    render(){
        let newNode = getTab(this.props.data)
        return <Tag color={newNode.color}>{newNode.txt}</Tag>
    }
}
export default TxtTag