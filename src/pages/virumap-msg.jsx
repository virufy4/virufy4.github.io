import React, { useEffect } from "react";

const paperURL = "https://docs.google.com/document/d/1e6p9TAd5NC4W7Lp58oxIp3FhUDGMexXXPL-f4--hhKk/edit?usp=sharing";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return <p>Redirecting...</p>;
}
