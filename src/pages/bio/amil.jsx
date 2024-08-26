import React, { useEffect } from "react";

const url = "https://tiny.cc/amil-bio";

export default function AmilBio() {
  useEffect(() => {
    window.location.replace(url);
  });

  return <p>Redirecting...</p>;
}
