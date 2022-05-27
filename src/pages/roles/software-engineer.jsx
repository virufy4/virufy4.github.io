import React from "react";
import { newRoles } from "../../data/available-roles/indexB";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { IoMdBriefcase, IoMdContrast } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";
import { GoPrimitiveDot, GoChevronLeft } from "react-icons/go";
import { Link } from "gatsby";

function softwareEngineer() {
  const role = newRoles.engineering.roles.filter(
    (role) => role.slug === "software-engineer"
  );

  return (
    <Layout className="font-montserrat">
      <SEO title="Roles | Virufy" />
      {/* Top fold */}
      <div className="w-full p-6 flex-col items-center md:flex-row md:w-md md:mx-auto md:p-8 md:my-10">
        <div className="w-full border-b-2 border-gray-300">
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
            <h2 className="text-xl text-center md:text-3xl md:text-left">
              {role[0].title}
            </h2>
            <button
              className="text-white font-bold bg-blue-600 invisible md:px-6 md:py-2 md:visible"
              onClick={() =>
                window.open("https://forms.gle/jCX1dRs26c1Vw1tv7", "_blank")
              }
            >
              APPLY TO THIS ROLE
            </button>
          </div>
          <div className=" w-full flex gap-1 my-1 justify-center md:justify-start md:gap-4 md:my-4">
            <div className="flex items-center gap-1">
              <HiCurrencyDollar />
              <p className="text-xs md:text-base">Unpaid</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdBriefcase />
              <p className="text-xs md:text-base">Volunteer</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdContrast />
              <p className="text-xs md:text-base">Part-Time</p>
            </div>
            <div className="flex items-center gap-1">
              <IoLocationSharp />
              <p className="text-xs md:text-base">Remote</p>
            </div>
          </div>
        </div>

        <p className="w-full text-base mt-2 mb-2 md:text-xl md:w-3/4 md:mt-8 md:mb-0">
          {role[0].description}
        </p>

        <button
          className="w-full text-white font-bold mt-4 px-6 py-2 bg-blue-600 visible md:invisible"
          onClick={() =>
            window.open("https://forms.gle/jCX1dRs26c1Vw1tv7", "_blank")
          }
        >
          APPLY TO THIS ROLE
        </button>

        {role[0].responsabilities[0] && (
          <>
            <h3 className="mt-8">Responsibilities</h3>
            <ul className="w-3/4 ml-8 mt-2">
              {role[0].responsabilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <GoPrimitiveDot className="mt-1" />
                  {resp}
                </li>
              ))}
            </ul>
          </>
        )}

        {role[0].requirements[0] && (
          <>
            <h3 className="mt-8">Requirements</h3>
            <ul className="w-3/4 ml-8 mt-2">
              {role[0].requirements.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <GoPrimitiveDot className="mt-1" />
                  {resp}
                </li>
              ))}
            </ul>
          </>
        )}
        {role[0].desired_skills[0] && (
          <>
            <h3 className="mt-8">Desired Skills</h3>
            <ul className="w-3/4 ml-8 mt-2">
              {role[0].desired_skills.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <GoPrimitiveDot className="mt-1" />
                  {resp}
                </li>
              ))}
            </ul>
          </>
        )}

        {role[0].minimun_qualification[0] && (
          <>
            <h3 className="mt-8">Minimun Qualifications</h3>
            <ul className="w-3/4 ml-8 mt-2">
              {role[0].minimun_qualification.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <GoPrimitiveDot className="mt-1" />
                  {resp}
                </li>
              ))}
            </ul>
          </>
        )}

        <h3 className="mt-8">Hours</h3>
        <ul className="w-3/4 ml-8 mt-2">
          {" "}
          <li className="flex items-start gap-2">
            <GoPrimitiveDot className="mt-1" />
            {role[0].time_commitment}
          </li>
        </ul>
        <h3 className="mt-8">Questions?</h3>
        <ul className="w-3/4 ml-8 mt-2">
          {" "}
          <li className="flex items-start gap-2">
            <GoPrimitiveDot className="mt-1" />

            <span>
              Reach out to{" "}
              <a
                href="mailto:vivek.krishnani@virufy.org"
                className="text-blue-600 cursor-pointer"
              >
                vivek.krishnani@virufy.org
              </a>{" "}
              and we will get back to you promptly.
            </span>
          </li>
        </ul>
        <button
          className="w-full text-white font-bold mt-10 px-6 py-2 bg-blue-600 md:w-64"
          onClick={() =>
            window.open("https://forms.gle/jCX1dRs26c1Vw1tv7", "_blank")
          }
        >
          APPLY TO THIS ROLE
        </button>
        <Link
          to="/opportunities"
          className="flex gap-2 items-center text-blue-600 mt-8"
        >
          {" "}
          <GoChevronLeft />
          Back
        </Link>
      </div>
    </Layout>
  );
}

export default softwareEngineer;
