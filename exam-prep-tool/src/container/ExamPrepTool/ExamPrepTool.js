import React, { Component } from "react";
import TestResults from "../../components/TestResults/TestResults";

import "./ExamPrepTool.css";
import NewTestResult from "../../components/TestResults/NewTestResult/NewTestResult";
import { Route } from "react-router-dom";

import axios from "../../axios-test-results";
import Spinner from "../../components/UI/Spinner/Spinner";

export default class ExamPrepTool extends Component {
  state = {
    results: [],
    loading: false,
  };

  componentDidMount() {
    axios
      .get("https://react-exam-prep-tool.firebaseio.com/test-results.json")
      .then((response) => {
        const serverData = { ...response.data };
        const serverResults = [];
        for (let index in serverData) {
          // const testResult = {...serverData[index], id: index}

          serverResults.push(serverData[index]);
        }
        this.setState({ results: serverResults });
      });
  }

  resultDataHandler = (newTestResult) => {
    this.setState({ loading: true });
    console.log("newTestResult", newTestResult);
    this.setState({ results: this.state.results.concat(newTestResult) });
    axios
      .post("/test-results.json", newTestResult)
      .then((response) => {
        this.setState({ loading: false });
        console.log("response", response);
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log("error", error);
      });
  };

  render() {
    let results = [];

    if (this.state.results.length !== 0) {
      results = this.state.results.map((result) => (
        <TestResults key={result.id} data={result} />
      ));
    } else {
      results.push(<TestResults key="empty" data={null} />);
    }

    let output = null;

    if (this.state.loading) {
      output = <Spinner />;
    } else {
      output = (
        <div className="Tool">
          <section className="Results">
            <Route path="/" exact render={() => results} />
            <Route
              path="/new-result"
              exact
              render={() => (
                <NewTestResult resultData={this.resultDataHandler} />
              )}
            />
          </section>
        </div>
      );
    }

    return output;
  }
}
