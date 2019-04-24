import React from "react";

import useMap from './useMap'

function Map() {
  const element = useMap()

  return (
    <div
      ref={element}
      style={{ width: 600, height: 400, backgroundColor: "#ddd" }}
    />
  );
}

export default Map;
