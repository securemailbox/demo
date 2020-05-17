import React from "react";
import { ApolloConsumer } from "@apollo/react-hooks";

import CreateMailbox from "./CreateMailbox";
import CreateMessage from "./CreateMessage";
import Graph from "./Graph";

const Main = () => {
  return (
    <ApolloConsumer>
      {(client) => (
        <>
          <CreateMailbox />
          <CreateMessage />
          <div style={{ margin: "4rem" }}>
            <Graph client={client} />
          </div>
        </>
      )}
    </ApolloConsumer>
  );
};

export default Main;
