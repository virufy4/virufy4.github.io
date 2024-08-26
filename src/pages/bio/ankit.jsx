import React, { useEffect } from "react";

const url = "https://tiny.cc/ankit-bio";

export default function AnkitBio() {
  useEffect(() => {
    window.location.replace(url);
  });

  return <p>Redirecting...</p>;
}
