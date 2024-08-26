import React, { useEffect } from "react";

const url = "https://tiny.cc/john-bio";

export default function JohnBio() {
  useEffect(() => {
    window.location.replace(url);
  });

  return <p>Redirecting...</p>;
}
