import React from "react";
import { genFakeFingerprint, request } from "../utils";

const CreateMailbox = () => {
  const handleClick = async () => {
    const fingerprint = genFakeFingerprint();
    const [status, body] = await request("/register/", { fingerprint });
  };
  return <button onClick={handleClick}>Create a new mailbox</button>;
};

export default CreateMailbox;
