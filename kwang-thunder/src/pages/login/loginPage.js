import React from "react";
import Modal from "../../ui/Modal";
import Card from "../../ui/card";
import Input from "../../input/input";

function loginPage() {
  return (
    <Modal>
      <form>
        <Input />
        <Input />
        <div>
          <button></button>
        </div>
      </form>
    </Modal>
  );
}

export default loginPage;
