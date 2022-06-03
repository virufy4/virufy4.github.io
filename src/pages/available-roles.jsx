import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeaderImage from "../images/available-roles-page/header.svg";
import { roles } from "../data/available-roles";
import { newRoles } from "../data/available-roles/indexB";
import { useIntl } from "gatsby-plugin-intl";
import Modal from "../components/ModalJoin";
import { ButtonLink } from "../components/Button";
import { Link } from "gatsby";

const Role = ({ description, location, title, slug, intl }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = React.useRef(null);

  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <div
        className="flex flex-col border-b-2 border-gray-400 md:grid items-center gap-6 bg-white py-6 mb-8 md:mb-6"
        style={{
          gridTemplateColumns: "4fr max-content max-content",
        }}
      >
        <div className="min-w-0">
          <p className="font-medium font-heading mb-3 md:mb-0 ">{title}</p>
        </div>

        <button
          className="w-full text-center font-heading no-underline bg-blue text-white px-6 py-2 inline-block md:text-md mt-2 md:mt-0"
          onClick={handleClick}
          ref={triggerRef}
        >
          {intl.formatMessage({
            id: `getInvolved.availableRoles.applyNow`,
          })}
        </button>
      </div>
      <Modal
        show={open}
        triggerRef={triggerRef}
        scale={0.5}
        onClose={handleClose}
      >
        <p className="text-md py-2 text-center ">
          Do you understand this is a part-time, unpaid, volunteer position?
        </p>

        <div className="flex justify-center min-w-max">
          <button className="bg-blue-600 w-20 mx-4 px-5 py-1 mt-4 text-white border-2 border-blue hover:bg-blue-500 ">
            <Link to={`/roles/${slug}`}>YES</Link>
          </button>

          <button
            className="w-20 mx-4 px-5 py-1 mt-4 text-blue border-2 border-blue hover:bg-gray-300"
            onClick={handleClose}
          >
            No
          </button>
        </div>
      </Modal>
    </>
  );
};

export default function AvailableRoles() {
  const intl = useIntl();

  return (
    <section className="container -mt-10">
      <SEO title="Available Roles | Virufy" />

      <div className="">
        <h1 className="my-8  font-heading xs:text-center">
          {intl.formatMessage({
            id: `getInvolved.availableRoles.ourMissionTitle`,
          })}
        </h1>
        <p>
          {intl.formatMessage({
            id: `getInvolved.availableRoles.ourMission`,
          })}
        </p>

        <h2 className="text-blue-600 mt-10 mb-2">Engineering</h2>
        {newRoles.engineering.roles.map((role, i) => (
          <Role key={i} {...role} intl={intl} />
        ))}

        <h2 className="text-blue-600 mt-14 mb-2">Data</h2>
        {newRoles.data.roles.map((role, i) => (
          <Role key={i} {...role} intl={intl} />
        ))}

        <h2 className="text-blue-600 mt-14 mb-2">Management</h2>
        {newRoles.management.roles.map((role, i) => (
          <Role key={i} {...role} intl={intl} />
        ))}

        <h2 className="text-blue-600 mt-14 mb-2">Human Resources</h2>
        {newRoles.human_resources.roles.map((role, i) => (
          <Role key={i} {...role} intl={intl} />
        ))}

        {/* {roles.map((role) => (
          <Role key={role.title} {...role} intl={intl} />
        ))} */}
      </div>
    </section>
  );
}
