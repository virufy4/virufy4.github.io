import React, { useEffect } from "react";

// const paperURL = "https://charity.gofundme.com/o/en/campaign/virufy";
const paperURL = "https://www.gofundme.com/f/virufy-nonprofit";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}
