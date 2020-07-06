import React from "react";

const Loading = () => {
  return (
    <div>
      <h2 className="page__header">loading</h2>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
