import React from "react";
import gql from "graphql-tag";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
import ApolloClient from "apollo-client";
import { useSubscription, useQuery } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import { MAILBOXES_QUERY, MAILBOXES_SUBSCRIPTION } from "../queries";

import MailboxGraph from "./MailboxGraph";

type GraphProps = {
  client: ApolloClient<InMemoryCache>;
};

const Graph = (props: GraphProps) => {
  const {
    data: mailbox,
    loading: mailboxesLoading,
    subscribeToMore,
  } = useQuery(MAILBOXES_QUERY);

  console.log(mailbox);

  return mailboxesLoading ? (
    <div>Loading...</div>
  ) : (
    <MailboxGraph
      mailboxes={mailbox.mailbox}
      subscribeToUpdates={() =>
        subscribeToMore({
          document: MAILBOXES_SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const newMailboxEntry = subscriptionData.data.mailbox;
            console.log(prev);
            return {
              ...prev,
              mailbox: newMailboxEntry,
            };
          },
        })
      }
    />
  );
};

export default Graph;
