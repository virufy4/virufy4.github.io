import React, { useEffect } from "react";

const consentFormURL =
  "https://drive.google.com/file/d/1A0qqhWJz7uE3ilLvdfPk04T_D-OHJ7pT/view?usp=sharing";

export default function ConsentForm() {
  useEffect(() => {
    window.location.replace(consentFormURL);
  });

  return <p>Redirecting...</p>;
}
