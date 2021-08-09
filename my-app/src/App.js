import React, { useState, lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// const Component1 = lazy(() =>
//   import("@discite-components/components.ui.component1")
// );

import { Component1 } from "@discite-components/components.ui.component1";
import * as meta from "./meta/demo-data.json";

const importDemo = (file) =>
  lazy(() => import(`${file}`).catch(() => console.log("Error in importing")));

const importDemoModule = (file) =>
  lazy(() =>
    import(`@discite-components/${file}`).then((module) => ({
      default: module.Component1,
    }))
  );

function App() {
  const metaDemoData = meta.data;
  const [selectedDemo, setSelectedDemo] = useState([]);

  async function loadDemo(filtered) {
    const promise = filtered.map(async (demo) => {
      console.log(demo);
      if (demo.id === "bitdevtest") {
        console.log(
          "@discite-components/components.ui.component1" === demo.file
        );
        const Demo = importDemoModule(demo.file);
        console.log("Demo: ", Demo);
        return <Demo key={demo.id} />;
      } else {
        const Demo = await importDemo(demo.file);
        console.log("DemoREg: ", Demo);
        return <Demo key={demo.id} />;
      }
    });

    Promise.all(promise).then(setSelectedDemo);
  }

  const selectDemo = (file) => {
    const filtered = metaDemoData.filter((elem) => {
      return elem.file === file;
    });
    console.log(filtered);
    loadDemo(filtered);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="btn-set">
        {metaDemoData.map((demoData, index) => (
          <React.Fragment key={index}>
            <button
              variant="outline-info"
              onClick={() => selectDemo(demoData.file)}
            >
              {demoData.name}
            </button>{" "}
          </React.Fragment>
        ))}
      </div>

      <div className="demo-ground">
        <React.Suspense fallback="Loading demo, hang on...">
          {selectedDemo}
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
