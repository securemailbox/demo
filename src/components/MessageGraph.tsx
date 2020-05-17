import React, { useEffect } from "react";
import { VictoryChart, VictoryBar, VictoryLabel } from "victory";

type Message = {
  id: number;
  message: string;
  sender_fingerprint: string;
};

type MessageGraphProps = {
  messages: Message[] | undefined;
  loading: boolean;
  subscribeToUpdates?: Function;
  resolution?: string;
};

const MessageGraph = (props: MessageGraphProps) => {
  const { messages: _messages, loading, resolution = "s" } = props;
  console.log(_messages);
  if (loading) return <div>Loading Messages</div>;

  const messages = _messages.message;
  useEffect(() => props.subscribeToUpdates && props.subscribeToUpdates(), []);

  return (
    <>
      <h3>Messages</h3>
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
          data={[{ x: " ", y: messages.length }]}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dx={-15} />}
        />
      </VictoryChart>
    </>
  );
};

export default MessageGraph;
