import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({ children, closePortal }) => {
  const portalRoot = document.getElementById("portal-root");

  const portalCloseHandler = (e) => {
    if (
      e.target.className === "portal-overlay" ||
      e.target.className === "closeBtn"
    ) {
      closePortal();
    }
   
  };

  return ReactDOM.createPortal(
    <div className="portal-overlay" onClick={(e) => portalCloseHandler(e)}>
      <div className="portal">
        {children}
        <button className="closeBtn" onClick={(e) => portalCloseHandler(e)}>
          Close
        </button>
      </div>
    </div>,
    portalRoot
  );
};

export default PortalComponent;
