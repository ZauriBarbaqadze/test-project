import React from "react";

const index = ({ title, content, visible }) => {
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
            <button type="button" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
