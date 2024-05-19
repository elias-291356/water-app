import { useState } from "react";
import React from "react";
import Modal from "../Modal/Modal";
const SettingModal = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="App">
      <button onClick={Toggle}>Modal</button>
      <Modal show={modal} title="My Modal" close={Toggle}>
        This is Modal content
      </Modal>
    </div>
  );
};

export default SettingModal;
