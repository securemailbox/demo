import React, { useState } from "react";
import { request } from "../utils";
import { useQuery } from "@apollo/react-hooks";

import { MAILBOXES_QUERY } from "../queries";

type MailboxIterProps = {
  fingerprint: string;
};

const CreateMessage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const [status, response] = await request("/send/", {
      fingerprint: from,
      sender_fingerprint: to,
      message,
    });
  };

  const { data, loading } = useQuery(MAILBOXES_QUERY);
  if (loading) return <div>Mailboxes Loading</div>;

  return (
    <>
      <select id="from" onChange={(e) => setFrom(e.target.value)} value={from}>
        <option></option>
        {data.mailbox.map(({ fingerprint }: MailboxIterProps) => (
          <option>{fingerprint}</option>
        ))}
      </select>

      <select id="to" onChange={(e) => setTo(e.target.value)} value={to}>
        <option></option>
        {data.mailbox
          .filter(({ fingerprint }: MailboxIterProps) => fingerprint !== from)
          .map(({ fingerprint }: MailboxIterProps) => (
            <option>{fingerprint}</option>
          ))}
      </select>
      <input
        type="text"
        id="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Message"
      />
      <button onClick={handleSubmit}>Create a new message</button>
    </>
  );
};

export default CreateMessage;
