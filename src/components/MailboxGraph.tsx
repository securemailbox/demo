import React, { useEffect } from "react";
import { VictoryChart, VictoryBar, VictoryLabel } from "victory";

type Mailbox = {
  id: number;
  fingerprint: string;
  // created_at: Date;
};

type MailboxGraphProps = {
  mailboxes: Mailbox[] | undefined;
  loading: boolean;
  subscribeToUpdates?: Function;
  resolution?: string;
};

const MailboxGraph = (props: MailboxGraphProps) => {
  const { mailboxes: _mailboxes, loading, resolution = "s" } = props;

  if (loading) return <div>Loading Mailboxes</div>;

  // Quick and dirty workaround to unpack mailboxes after we know they're loaded
  const mailboxes = _mailboxes.mailbox;
  useEffect(() => props.subscribeToUpdates && props.subscribeToUpdates(), []);

  return (
    <>
      <h3>Mailboxes</h3>
      <VictoryChart
        horizontal
        animate={{
          duration: 500,
        }}
        padding={40}
      >
        <VictoryBar
          style={{
            labels: { fill: "white" },
            data: { fill: "tomato", width: 12 },
          }}
          data={[{ x: " ", y: mailboxes.length }]}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dx={-15} />}
        />
      </VictoryChart>
    </>
  );
};

export default MailboxGraph;
