import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({ children,closePortal }) => {
  const portalRoot = document.getElementById("portal-root");

  return ReactDOM.createPortal(
    <div className="portal-overlay" onClick={()=>closePortal()}>
      <div className="portal">{children}</div>
    </div>,
    portalRoot
  );
};

export default PortalComponent;
