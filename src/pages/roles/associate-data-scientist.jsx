import React from "react";
import { newRoles } from "../../data/available-roles/indexB";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { IoMdBriefcase, IoMdContrast } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";
import { GoPrimitiveDot, GoChevronLeft } from "react-icons/go";
import { Link } from "gatsby";

function associateDataScientist() {
  const role = newRoles.data.roles.filter(
    (role) => role.slug === "associate-data-scientist"
  );

  return (
    <Layout className="font-montserrat">
      <SEO title="Roles | Virufy" />
      {/* Top fold */}
      <div className="container">
        <div className="w-full border-b-2 border-gray-300">
          <div className="w-full flex justify-between items center">
            <h2>{role[0].title}</h2>
            <button
              className="text-white font-bold px-6 py-2 bg-blue-600"
              onClick={() =>
                window.open("https://forms.gle/jCX1dRs26c1Vw1tv7", "_blank")
              }
            >
              APPLY TO THIS ROLE
            </button>
          </div>
          <div className="flex gap-4 my-4">
            <div className="flex items-center gap-1">
              <HiCurrencyDollar />
              <p className="text-base">Unpaid</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdBriefcase />
              <p className="text-base">Volunteer</p>
            </div>
            <div className="flex items-center gap-1">
              <IoMdContrast />
              <p className="text-base">Part-Time</p>
            </div>
            <div className="flex items-center gap-1">
              <IoLocationSharp />
              <p className="text-base">Remote</p>
            </div>
          </div>
        </div>

        <p className="w-3/4 mt-8">{role[0].description}</p>

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
        <p className="mt-10 italic">
          Virufy complies with the Immigration Reform and Control Act (IRAC).
          Virufy is an equal opportunity, volunteer-run, 501(c)(3) non-profit
          organization, and all qualified applicants will receive consideration
          for a volunteer opportunity without regard to race, color, religion,
          age, sex, national origin, disability status, genetics, protected
          veteran status, sexual orientation, gender identity or expression, or
          any other characteristic protected by any applicable Federal, State,
          local, or international laws.{" "}
        </p>
        <button
          className="text-white font-bold mt-10 px-6 py-2 bg-blue-600"
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

export default associateDataScientist;
