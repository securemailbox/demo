import React from "react";
import { genFakeFingerprint } from "../utils";

const CreateMailbox = () => {
  const handleClick = async () => {
    const fingerprint = genFakeFingerprint();
    const response = await fetch("http://localhost:5000/register/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ fingerprint }),
    });

    console.log(response.status);
  };
  return <button onClick={handleClick}>Create a new mailbox</button>;
};

export default CreateMailbox;
