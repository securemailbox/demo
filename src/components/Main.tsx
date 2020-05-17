import React from "react";
import { ApolloConsumer } from "@apollo/react-hooks";

import CreateMailbox from "./CreateMailbox";
import Graph from "./Graph";

const Main = () => {
  return (
    <ApolloConsumer>
      {(client) => (
        <>
          <CreateMailbox />
          <div style={{ margin: "4rem" }}>
            <Graph client={client} />
          </div>
        </>
      )}
    </ApolloConsumer>
  );
};

export default Main;
