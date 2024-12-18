import React, { useEffect } from "react";

const paperURL = "https://www.gofundme.com/f/donate-virufy";

export default function Paper() {
  useEffect(() => {
    window.location.assign(paperURL);
  });

  return <p>Redirecting...</p>;
}
