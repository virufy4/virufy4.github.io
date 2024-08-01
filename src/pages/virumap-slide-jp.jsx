import React, { useEffect } from "react";

const paperURL =
  "https://docs.google.com/presentation/d/1GqNirFzOrWsLoLaH5hSe8YVXTMMrWZ1gW5d56jICs30/edit?usp=sharing";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return <p>Redirecting...</p>;
}
