import React, { Component } from "react";
import TestResults from "../../components/TestResults/TestResults";
import { Form, Input, Button, Checkbox, Row, Col, Tooltip, Modal } from "antd";

import "./ExamPrepTool.css";
import NewTestResult from "../../components/TestResults/NewTestResult/NewTestResult";

export default class ExamPrepTool extends Component {
  state = {
    results: [],
    modalVisible: false,
  };

  addNewResultHandler = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleOk = (e) => {
    console.log(e.target.values);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const result1 = {
      key: 1,
      paragraph: 5,
      date: new Date().toLocaleString(),
      page: 253,
      questionsTotal: 50,
      questionsCorrect: 38,
    };

    const result2 = {
      key: 2,
      paragraph: 5,
      date: new Date().toLocaleString(),
      page: 253,
      questionsTotal: 50,
      questionsCorrect: 28,
    };

    const result3 = {
      key: 3,
      paragraph: 5,
      date: new Date().toLocaleString(),
      page: 253,
      questionsTotal: 50,
      questionsCorrect: 8,
    };

    const updatedPosts = [...this.state.results];

    updatedPosts.push(result1, result2, result3);

    let results = [];

    if (updatedPosts.length !== 0) {
      results = updatedPosts.map((result) => (
        <TestResults key={result.id} data={result} />
      ));
    } else {
      results.push(<TestResults key="empty" data={null} />);
    }

    const output = (
      <div className="Tool">
        <section className="Results">{results}</section>
      </div>
    );

    return output;
  }
}
