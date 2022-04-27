import React from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import MapAmerica from "./MapAmerica";

export default function Dashboard({ data }) {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Dashboard | Virufy" />

      <div className="px-4 lg:px-0 lg:w-4/5 lg:mx-auto">
        <div className="grid mb-4 xl:px-0 justify-items-center grid-col-1 gap-16 overflow-hidden">
          <div className="mb-4 justify-self-start xl:mb-0 2l:mr-9 pt-10 xs:pt-8">
            <h1
              className="font-bold mb-8 "
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "dashboard.header" }),
              }}
            />
            <p
              className="mb-8 xl:pr-14 max-w-screen-lg"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "dashboard.sub-header" }),
              }}
            />
            <a
              className="vf-btn-primary mx-auto my-4 px-6 py-2 inline-block border-2 border-blue"
              target="_blank"
              href={"/app"}
            >
              {intl.formatMessage({ id: "dashboard.button" })}
            </a>
          </div>
        </div>
      </div>
      {/* COUNTER */}
      <div className="w-full h-auto sm:h-screen grid justify-items-center px-2  md:mb-44 xs:mb-36">
        <iframe
          className="inset-0"
          frameborder="0"
          width="75%"
          height="120%"
          scrolling="no"
          src="https://datastudio.google.com/embed/reporting/a8be8870-2823-40d9-9159-a1f5bde05502/page/FSMVC"
          allowfullscreen
          style={{ border: 0 }}
        ></iframe>
      </div>
    </Layout>
  );
}
