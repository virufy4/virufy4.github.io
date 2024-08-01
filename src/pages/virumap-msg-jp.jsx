import React, { useEffect } from "react";

const paperURL = "https://docs.google.com/document/d/1HLQ7ZNMR1wO3BdaWnfQw3_yyhBfNBJGYz8zWN25gA8o/edit?usp=sharing";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return <p>Redirecting...</p>;
}
