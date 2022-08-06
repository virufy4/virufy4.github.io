import React, { useEffect } from "react";

const paperURL = "https://docs.google.com/document/d/1dVq0nnvs2m2FiKIyqJVwQVvA7qlOfCFS/edit";

export default function Paper() {
  useEffect(() => {
    window.location.replace(paperURL);
  });

  return <p>Redirecting...</p>;
}
