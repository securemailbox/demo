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
  console.log(mailboxes, resolution);

  useEffect(() => props.subscribeToUpdates && props.subscribeToUpdates(), []);

  return (
    <VictoryChart
      animate={{
        duration: 500,
      }}
      domainPadding={40}
    >
      <VictoryBar
        horizontal
        style={{
          labels: { fill: "white" },
          data: { fill: "tomato", width: 12 },
        }}
        data={[{ x: "Mailboxes", y: mailboxes.length }]}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel dy={30} />}
      />
    </VictoryChart>
  );
};

export default MailboxGraph;
