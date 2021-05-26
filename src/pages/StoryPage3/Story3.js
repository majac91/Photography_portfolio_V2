import React, { useEffect } from "react";

const Story3 = ({ setContainerClass }) => {
  useEffect(() => {
    setContainerClass("story3Page");
  }, []);
  return <div className="story3">Coming soon...</div>;
};

export default Story3;
