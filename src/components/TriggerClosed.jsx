import React from "react";
import { FiChevronRight } from "react-icons/fi";

const TriggerClosed = ({ trigger }) => {
  return (
    <div className="trigger">
      <p>{trigger}</p>
      <FiChevronRight />
    </div>
  );
};

export default TriggerClosed;
