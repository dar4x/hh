import React, { useState } from "react";
import styles from "./codebar.css";

function CodeBar() {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="codebar">
      <nav className="tab">
        <button
          onClick={() => setActiveTab("html")}
          className={`item ${activeTab === "html" ? "activeTab" : ""}`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={`item ${activeTab === "css" ? "activeTab" : ""}`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab("js")}
          className={`item ${activeTab === "js" ? "activeTab" : ""}`}
        >
          JS
        </button>
      </nav>

      <div className="editor">
        {activeTab === "html" ? <div>HTML</div> : null}
        {activeTab === "css" ? <div>CSS</div> : null}
        {activeTab === "js" ? <div>JS</div> : null}
      </div>
    </div>
  );
}

export default CodeBar;
