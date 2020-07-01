import React from "react";
import "./App.css";
import MyLayout from "./components/Layout/MyLayout";
import ExamPrepTool from "./container/ExamPrepTool/ExamPrepTool";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyLayout>
        <ExamPrepTool />
      </MyLayout>
    </BrowserRouter>
  );
}

export default App;
