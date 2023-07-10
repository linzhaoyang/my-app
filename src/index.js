import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/reset.css";
import App2 from "./App";
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from "@ant-design/cssinjs";

ReactDOM.render(
  <StyleProvider
    autoClear
    transformers={[legacyLogicalPropertiesTransformer]}
    hashPriority="high"
  >
    <App2 />
  </StyleProvider>,
  document.getElementById("root")
);
