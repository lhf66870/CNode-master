import React, {Component} from "react";
import {Row, Col, BackTop, Icon } from "antd";
import IndexMenu from './indexMenu'
import IndexList from './list'
class Index extends Component {
    render (){
        let tab = this.props.match.params.id;
        return (
            <Row className="wrap">
                <Col md={6} xs={0} className="indexSlider">
                    <IndexMenu
                        id="indexMenu"
                        mode="vertical"
                    />
                </Col>
                <Col md={0} xs={24}>
                <IndexMenu
                    id="indexXsMenu"
                    mode="horizontal"
                />
                </Col>
                <Col 
                    md={18} 
                    xs={24}
                    id="indexList"
                >
                    <IndexList tab={tab} />
                </Col>
                <BackTop>
                    {/**
                     * <div className="ant-back-top-inner">UP</div>
                     */}
                    <Icon type="up-square" style={{fontSize:"36px"}} theme="twoTone" />
                </BackTop>
            </Row>
        )
    }
}

export default Index;