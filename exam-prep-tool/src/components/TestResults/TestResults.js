import React from "react";

import TestResult from "./TestResult/TestResult";

const TestResults = (props) => {
  const emptyTestResult = (
    <TestResult
      paragraph={props.data}
      date={props.data}
      page={props.data}
      questionsTotal={props.data}
      questionsCorrect={props.data}
    />
  );

  let output = emptyTestResult;

  if (props.data) {
    output = (
      <TestResult
        paragraph={props.data.paragraph}
        date={props.data.date}
        page={props.data.page}
        questionsTotal={props.data.questionsTotal}
        questionsCorrect={props.data.questionsCorrect}
      />
    );
  }

  return output;
};

export default TestResults;
