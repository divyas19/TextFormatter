import React from "react";

function Alert({ alertt }) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {alertt && (
        <div
          className={`alert alert-${alertt.type}alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(alertt.type)}</strong>: {alertt.msg}
        </div>
      )}
    </div>
  );
}
export default Alert;
