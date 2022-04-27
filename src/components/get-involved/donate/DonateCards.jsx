import React from "react";
import DonateCtaCard from "./DonateCtaCard";
import PaymentCard from "./PaymentCard";

function DonateCards() {
  return (
    <div className="lg:h-screen w-screen xs:z-50 xs:absolute top-11 lg:pb-6 p-3">
      <div className="mx-auto md:max-w-xl  md:pb-6">
        <DonateCtaCard />
        <PaymentCard />
      </div>
    </div>
  );
}

export default DonateCards;
