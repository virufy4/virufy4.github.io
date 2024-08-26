import React, { useEffect } from "react";

const url = "https://tiny.cc/chris-bio";

export default function ChrisBio() {
  useEffect(() => {
    window.location.replace(url);
  });

  return <p>Redirecting...</p>;
}
