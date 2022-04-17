import React from "react";
import history from "../../history";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">DELETE</button>
      <button className="ui button">CANCEL</button>
    </React.Fragment>
  );
  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure?"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
