import ReactDOM from "react-dom";
import React, { Component } from "react";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from './tools'

export default class ReactEditor extends Component {
  render() {
    return (
      <EditorJs data={{
        text: "What does it mean «block-styled editor»",
        level: 3
      }} tools={EDITOR_JS_TOOLS} />
    );
  }
}
