import React from "react";
import ApolloClient from "apollo-client";
import { useQuery } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";

import {
  MAILBOXES_QUERY,
  MAILBOXES_SUBSCRIPTION,
  MESSAGES_QUERY,
  MESSAGES_SUBSCRIPTION,
} from "../queries";

import MailboxGraph from "./MailboxGraph";
import MessageGraph from "./MessageGraph";

type GraphProps = {
  client: ApolloClient<InMemoryCache>;
};

const Graph = (props: GraphProps) => {
  const {
    data: mailboxes,
    loading: mailboxesLoading,
    subscribeToMore,
  } = useQuery(MAILBOXES_QUERY);

  const {
    data: messages,
    loading: messagesLoading,
    subscribeToMore: messagesSubscribeToMore,
  } = useQuery(MESSAGES_QUERY);

  // return mailboxesLoading ? (
  //   <div>Loading...</div>
  // ) :
  return (
    <>
      <MailboxGraph
        mailboxes={mailboxes}
        loading={mailboxesLoading}
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

      <MessageGraph
        messages={messages}
        loading={messagesLoading}
        subscribeToUpdates={() =>
          messagesSubscribeToMore({
            document: MESSAGES_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newMessageEntry = subscriptionData.data.message;
              return {
                ...prev,
                message: newMessageEntry,
              };
            },
          })
        }
      />
    </>
  );
};

export default Graph;
