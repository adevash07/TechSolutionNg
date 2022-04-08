import React from "react";

export default function ModalG({ children }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className="overLay" onClick={handleClick(e)}>
      {children}
    </div>
  );
}
