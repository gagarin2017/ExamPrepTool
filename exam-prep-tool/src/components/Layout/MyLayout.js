import React, { Component } from "react";

import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import classes from "./MyLayout.module.css";
const { Header, Content, Footer } = Layout;

export default class MyLayout extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className={classes.logo}> Exam Preparation Tool </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 280,
              marginTop: "45px",
            }}
          >
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
