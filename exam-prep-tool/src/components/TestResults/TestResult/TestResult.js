import React from "react";
import { Row, Col, Button, Tooltip } from "antd";

import classes from "./TestResult.module.css";

import { NavLink } from "react-router-dom";

const TestResult = (props) => {
  const numberWrongQuestions = props.questionsTotal - props.questionsCorrect;
  const percentage = (props.questionsCorrect * 100) / props.questionsTotal;

  const paragraph =
    props.paragraph === null ? (
      <span>&nbsp;</span>
    ) : (
      <b>Paragraph {props.paragraph}</b>
    );

  const pageNo =
    props.page === null ? <span>&nbsp;</span> : <span>page {props.page}</span>;

  const percentageStr = Number.isNaN(percentage) ? (
    <span>&nbsp;</span>
  ) : (
    <span>{percentage} %</span>
  );

  const questionsTotal =
    props.questionsTotal === null ? (
      <span>&nbsp;</span>
    ) : (
      <Row>
        <Col span={15}>Questions in total: </Col>
        <Col span={9}>{props.questionsTotal}</Col>
      </Row>
    );

  const questionsCorrect =
    props.questionsCorrect === null ? (
      <span>&nbsp;</span>
    ) : (
      <Row>
        <Col span={15}>Questions correct: </Col>
        <Col span={9} style={{ color: "green" }}>
          {props.questionsCorrect}
        </Col>
      </Row>
    );

  const numberWrongQuestionsStr =
    numberWrongQuestions === 0 ? (
      <span>&nbsp;</span>
    ) : (
      <Row>
        <Col span={15}> Questions wrong: </Col>
        <Col span={9} style={{ color: "red" }}>
          {numberWrongQuestions}
        </Col>
      </Row>
    );

  const dateStr =
    props.date === null ? (
      <span>&nbsp;</span>
    ) : (
      <Row>
        <Col span={24} className={classes.pageNumber}>
          {new Date(props.date).toLocaleString()}
        </Col>
      </Row>
    );

  return (
    <div className={classes.TestResult}>
      <Row>
        <Col span={18}></Col>
        <Col span={6}>
          <NavLink to="/new-result">
            <Tooltip title="Add Result">
              <Button type="secondary" shape="circle" size="small">
                <p style={{ color: "blue" }}>+</p>
              </Button>
            </Tooltip>
          </NavLink>
        </Col>
      </Row>

      <h3>{paragraph}</h3>
      <Row>
        <Col span={24} className={classes.pageNumber}>
          {pageNo}
        </Col>
      </Row>
      <Row>
        <Col span={24} className={classes.percentage}>
          {percentageStr}
        </Col>
      </Row>
      {questionsTotal}
      {questionsCorrect}
      {numberWrongQuestionsStr}
      {dateStr}
    </div>
  );
};

export default TestResult;
