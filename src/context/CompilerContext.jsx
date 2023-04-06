import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../utilts/consts";

const editorCompiler = createContext();

export function useEditorCompiler() {
  return useReducer(editorCompiler);
}

const initState = {
  html: "",
  css: "",
  js: "",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.html:
      return { ...state, html: action.payload };
    case ACTIONS.css:
      return { ...state, css: action.payload };
    case ACTIONS.js:
      return { ...state, js: action.payload };
    default:
      return state;
  }
}

function CompilerContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    html: state.html,
    css: state.css,
    js: state.css,
  };
  return (
    <editorCompiler.Provider value={value}>{children}</editorCompiler.Provider>
  );
}

export default CompilerContext;
