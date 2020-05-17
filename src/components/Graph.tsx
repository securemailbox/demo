import React from "react";
import ApolloClient from "apollo-client";
import { useQuery } from "@apollo/react-hooks";
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
