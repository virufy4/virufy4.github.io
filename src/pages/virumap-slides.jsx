import React, { useEffect } from "react";

const paperURL = "https://docs.google.com/presentation/d/1Sb3WXxKrJPbdKkKH9IXV4iWCd3b5iSz5f_92UuJbYZc/edit?usp=sharing";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return <p>Redirecting...</p>;
}
