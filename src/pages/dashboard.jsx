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
          </div>
        </div>
      </div>
      <iframe
        src={`https://virufy-dashboard.vercel.app/${
          intl.locale == "ja" ? "jp" : intl.locale
        }`}
        className="w-full min-h-screen border-none"
      />
      <div className="flex flex-col items-center justify-center mt-8 m-2">
        <p className="text-xl text-center font-semibold mb-4">
          {intl.formatMessage({ id: "dashboard.cta" })}
        </p>
        <a
          className="vf-btn-primary mx-auto my-4 px-6 py-2 inline-block border-2 border-blue"
          target="_blank"
          href={"/app"}
        >
          {intl.formatMessage({ id: "dashboard.button" })}
        </a>
      </div>
    </Layout>
  );
}
