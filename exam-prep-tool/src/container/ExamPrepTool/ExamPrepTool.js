import React, { Component } from "react";
import TestResults from "../../components/TestResults/TestResults";
import { Form, Input, Button, Checkbox, Row, Col, Tooltip, Modal } from "antd";

import "./ExamPrepTool.css";
import NewTestResult from "../../components/TestResults/NewTestResult/NewTestResult";
import { Route, NavLink } from "react-router-dom";

export default class ExamPrepTool extends Component {
  state = {
    results: [],
  };

  componentDidUpdate() {
    console.log("[ExamPropTool] this.props", this.props);
  }

  componentDidMount() {
    console.log("[ExamPropTool] this.props", this.props);
  }

  resultDataHandler = (newTestResult) => {
    console.log("newTestResult", newTestResult);
    this.setState({ results: this.state.results.concat(newTestResult) });
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

    // const updatedTestResults = [...this.state.results];

    // updatedPosts.push(result1, result2, result3);

    let results = [];

    if (this.state.results.length !== 0) {
      results = this.state.results.map((result) => (
        <TestResults key={result.id} data={result} />
      ));
    } else {
      results.push(<TestResults key="empty" data={null} />);
    }

    const output = (
      <div className="Tool">
        <section className="Results">
          <Route path="/" exact render={() => results} />
          <Route
            path="/new-result"
            exact
            render={() => <NewTestResult resultData={this.resultDataHandler} />}
          />
        </section>
      </div>
    );

    return output;
  }
}
