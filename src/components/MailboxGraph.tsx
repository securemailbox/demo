import React, { useEffect } from "react";
import { VictoryChart, VictoryBar, VictoryLabel } from "victory";

type Mailbox = {
  id: number;
  fingerprint: string;
  // created_at: Date;
};

type MailboxGraphProps = {
  mailboxes: Mailbox[];
  subscribeToUpdates?: Function;
  resolution?: string;
};

const MailboxGraph = (props: MailboxGraphProps) => {
  const { mailboxes, resolution = "s" } = props;
  // console.log(mailboxes, resolution);

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
