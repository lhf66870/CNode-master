import React, { Component } from 'react';
import {Layout, Row, Col, Divider,  Dropdown, Button} from 'antd' //Menu, Icon,

import Nav from "./nav"

class MainHeader extends Component {
    render () {
        return (<Layout.Header>
            <Row className="wrap">
                <Col md={6} xs={24}>
                    <h1 id="logo">Rversion_邪魅</h1>
                </Col>
                <Col md={18} xs={0}>
                    <Divider type="vertical" className="headerDivider"/>
                    <Nav id="nav" mode="horizontal" />
                </Col>
                <Col md={0} xs={24} className="xsNav">
                    <Dropdown
                        overlay={
                            <Nav id="xsNav" mode="vertical" />
                        }
                        placement="bottomRight"
                        trigger={ ["click","touchend"] }
                    >
                        <Button icon="bars"></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>)
    }
} 

export default MainHeader;