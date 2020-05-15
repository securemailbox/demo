import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./api";

// import "./index.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>Welcome to my app</div>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
