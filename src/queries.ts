import gql from "graphql-tag";

export const MAILBOXES_QUERY = gql`
  query MailboxesQuery {
    mailbox(order_by: { created_at: desc }) {
      id
      fingerprint
      created_at
    }
  }
`;

export const MESSAGES_QUERY = gql`
  query MessagesQuery($_eq: Int) {
    message(where: { mailbox_id: { _eq: $_eq } }) {
      message
      sender_fingerprint
      id
    }
  }
`;

export const MAILBOXES_SUBSCRIPTION = gql`
  subscription MailboxesSubscription {
    mailbox(order_by: { created_at: desc }) {
      id
      fingerprint
      created_at
    }
  }
`;

export const MESSAGES_SUBSCRIPTION = gql`
  subscription MessagesSubscription($_eq: Int) {
    message(where: { mailbox_id: { _eq: $_eq } }) {
      message
      sender_fingerprint
      id
    }
  }
`;
