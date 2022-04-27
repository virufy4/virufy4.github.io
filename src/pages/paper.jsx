import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import pdf from "../documents/Novel Covid-19 Calculator.pdf";
import PaperMeta from "../components/meta/paperMeta";
export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/paper\\/.*\\.((png)|(jpg)|(jpeg))/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default function Papers({ data }) {
  const images = data.allFile.edges;
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: `paper.title` })} />
      <PaperMeta />
      <div className="wrapper lg:flex items-center justify-between md:py-4">
        <h1 classNmae="font-bold text-4xl">
          {intl.formatMessage({ id: "paper.headers.header" })}
        </h1>
      </div>
      <section className="wrapper md:flex">
        <div className="lg:w-2/5">
          <GatsbyImage
            className="mx-auto w-1\/2"
            fluid={images["ads"].childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-2/3 mx-10">
          <p className="mb-8">
            {intl.formatMessage({ id: `paper.papers.section2.date` })}
          </p>
          <h2 className="mb-8 font-bold text-2xl">
            {intl.formatMessage({ id: `paper.papers.section2.title` })}
          </h2>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract"
            className="text-black"
          >
            <u>
              {intl.formatMessage({ id: `paper.papers.section2.readMoreLink` })}
            </u>
          </a>
        </div>

        <div className="lg:w-2/5">
          <GatsbyImage
            className="mx-auto w-1\/2"
            fluid={images["ads"].childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-2/3 mx-10">
          <p className="mb-8">
            {intl.formatMessage({ id: `paper.papers.section6.date` })}
          </p>
          <h2 className="mb-8 font-bold text-2xl">
            {intl.formatMessage({ id: `paper.papers.section6.title` })}
          </h2>
          <a target="_blank" rel="noreferrer" href={pdf} className="text-black">
            <u>
              {intl.formatMessage({ id: `paper.papers.section6.readMoreLink` })}
            </u>
          </a>
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/spreadsheets/d/1kgKk9HfIj6Q0EDnrVcknIYAjvscLcI35rnPn3j7OYko/edit"
            className="text-black"
          >
            <u>
              {intl.formatMessage({
                id: `paper.papers.section6.calculatorLink`,
              })}
            </u>
          </a>
        </div>
      </section>

      <section className="wrapper md:flex">
        <div className="lg:w-2/5">
          <GatsbyImage
            className="mx-auto w-1\/2"
            fluid={images["ads"].childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-2/3 mx-10">
          <p className="mb-8">
            {intl.formatMessage({ id: `paper.papers.section4.date` })}
          </p>
          <h2 className="mb-8 font-bold text-2xl">
            {intl.formatMessage({ id: `paper.papers.section4.title` })}
          </h2>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://pubmed.ncbi.nlm.nih.gov/34610883/"
            className="text-black"
          >
            <u>
              {intl.formatMessage({ id: `paper.papers.section4.readMoreLink` })}
            </u>
          </a>
        </div>

        <div className="lg:w-2/5">
          <GatsbyImage
            className="mx-auto w-1\/2"
            fluid={images["ads"].childImageSharp.fluid}
          />
        </div>
        <div className="lg:w-2/3 mx-10">
          <p className="mb-8">
            {intl.formatMessage({ id: `paper.papers.section5.date` })}
          </p>
          <h2 className="mb-8 font-bold text-2xl">
            {intl.formatMessage({ id: `paper.papers.section5.title` })}
          </h2>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://arxiv.org/abs/2201.01669"
            className="text-black"
          >
            <u>
              {intl.formatMessage({ id: `paper.papers.section5.readMoreLink` })}
            </u>
          </a>
        </div>
      </section>
    </Layout>
  );
}
