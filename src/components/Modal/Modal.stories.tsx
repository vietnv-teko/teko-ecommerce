import React, { useState } from "react";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Default Modal</button>
      <Modal
        content={"Default Modal"}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
