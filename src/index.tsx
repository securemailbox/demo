import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./api";
import Main from "./components/Main";

// import "./index.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
