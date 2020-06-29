import React from "react";
import { FiChevronDown } from "react-icons/fi";

const TriggerClosed = ({ trigger }) => {
  return (
    <div className="trigger">
      <p>{trigger}</p>
      <FiChevronDown />
    </div>
  );
};

export default TriggerClosed;
