import React from "react";
// import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { teamMembers } from "../data/fukuoka-team";

const defaultImage = "images/team/default.png"; // Default fallback image

export default function Fukuoka({ data }) {
  // Map the correct team images from GraphQL data
  const teamImagesMap = {
    fumihiko: data.fumihiko?.childImageSharp?.fluid,
    amil: data.amil?.childImageSharp?.fluid,
    moeka: data.moeka?.childImageSharp?.fluid,
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Fukuoka | Virufy" />

      {/* Main Header */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">一般社団法人 Virufy Fukuoka</h1>
        <p className="text-lg text-gray-700 mt-2">私たちについて</p>
      </div>

      {/* About Section */}
      <div className="px-6 lg:px-40 text-center">
        <Img
          fluid={data.mainImage?.childImageSharp?.fluid || defaultImage}
          alt="Fukuoka Team"
          className="rounded-md mx-auto w-full max-w-3xl"
        />
        <p className="mt-6 text-lg">
          一般社団法人Virufy
          Fukuokaは、咳音データを用いた呼吸器疾患のAI探知技術の実証研究を行う団体です。私たちは、日本国内及び世界の医療機関へのアクセスが難しい高齢者や低所得者層の方々に対して、テクノロジーを駆使した手軽な呼吸器疾患の自己診断サービスを開発し、地域社会に貢献することを目標に設立されました。
        </p>

        {/* Our Strengths Section */}
        <p className="mt-4 text-lg">
          私たちの強みは、いつでもどこでも、誰もがスマートフォン一つで、手軽に自己の健康状態を把握できる点にあります。特に、呼吸器感染症の早期発見や感染拡大抑制に役立ち、重症化リスクを軽減することで、より安全で安心な社会の実現に貢献できると信じています。
        </p>

        {/* Establishment Info */}
        <p className="mt-4 text-lg font-semibold">
          Virufy Fukuokaは、2024年12月に設立されました。
        </p>
        <p className="text-lg">
          一般社団法人として非営利組織であり、助成金や寄付金などを活用して、地域社会や貧しいコミュニティに貢献し、困っている人々に利益を還元することを目的としています。私たちの事業は、単に技術を提供するだけでなく、社会全体の健康増進と人々のウェルビーイングの向上を追求しています。
        </p>

        {/*Extended Info */}
        <p className="mt-4 text-lg">代表理事: 横田 文彦 </p>
        <p className="mt-4 text-lg">
          所在地: 福岡県内（詳細住所は公表を控えさせていただきます）
        </p>
      </div>

      {/* Project Overview */}
      <div className="px-6 lg:px-40 mt-10">
        <p className="mt-4 text-lg">
          咳は、インフルエンザ、新型コロナウイルス、風邪、肺炎など様々な呼吸器疾患の初期症状のひとつです。
          その音には、疾患特有のパターン、ピッチ、トーンが含まれています。
        </p>

        <p className="mt-4 text-lg">
          そこで本研究では、スマートフォンアプリを通して、ご自身の咳音を録音していただき、その変化をAIで自動的に解析することで、早期に呼吸器疾患の兆候を捉えることが可能なシステムの開発を目指します。このシステムは、医療機関で検査を受けられない、または検査を拒否する方々にとって、特に有用であると考えています。
        </p>

        {/* NEW: Project Objectives */}
        <p className="mt-4 text-lg">
          本プロジェクトの主な目的は、AI判別アルゴリズムの正確性・性能評価を実証実験により行うことです。
          さらに、AIによる咳音収集・診断補助アプリを用いた健康管理ダッシュボード、地域住民の感染状況のリアルタイム可視化・予測が可能なヒートマップの開発を目指します。
        </p>

        <p className="mt-4 text-lg">
          この研究は、単に技術を開発するだけでなく、咳音データの収集、AIアルゴリズムの精度向上、そして実際のアプリ開発を通じて、呼吸器系感染症に対する新たなサーベイランスシステムの構築を目指しています。
        </p>
        {/* NEW: Call for Facilities */}
        <p className="mt-4 text-lg">
          高齢者施設での実証実験にご協力いただける施設を募集中です。詳しくは、お問い合わせください。
        </p>
      </div>

      {/* Team Members Section */}
      <div className="px-6 lg:px-40 mt-10 text-center">
        <h2 className="text-2xl font-bold">チーム紹介</h2>
        <div className="flex flex-col items-center gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Img
                fluid={teamImagesMap[member.image] || defaultImage}
                alt={member.name}
                className="w-48 h-48 object-cover shadow-lg border border-gray-300"
              />
              <p className="mt-4 font-bold text-lg">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-6 lg:px-40 mt-10 mb-16 text-center">
        <h2 className="text-2xl font-bold">お問い合わせ</h2>
        <p className="mt-2 text-lg">
          Eメール:{" "}
          <a
            href="mailto:yokota.fumihiko.785@m.kyushu-u.ac.jp"
            className="text-blue-600"
          >
            yokota.fumihiko.785@m.kyushu-u.ac.jp
          </a>
        </p>
      </div>
    </div>
  );
}

// GraphQL Query to Fetch Images
export const query = graphql`
  query {
    mainImage: file(relativePath: { eq: "images/team/FukuokaTeam.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fumihiko: file(relativePath: { eq: "images/team/fumihiko.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amil: file(relativePath: { eq: "images/team/amil.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moeka: file(relativePath: { eq: "images/team/moeka.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
