import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { withRouter } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const NewTestResult = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {

    const updatedValues = { ...values, id: Date.now() };

    props.resultData(updatedValues);
    props.history.push({ pathname: "/" });
  };

  const onReset = () => {
    form.resetFields();
  };

  form.setFieldsValue({
    paragraph: "5",
    page: "512",
    questionsTotal: "50",
    questionsCorrect: "45",
  });

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="paragraph"
        label="Paragraph"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="page"
        label="Page"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="questionsTotal"
        label="Total Questions"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="questionsCorrect"
        label="Correct Questions"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(NewTestResult);
