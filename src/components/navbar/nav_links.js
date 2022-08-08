const navLinks = [
  {
    id: "2",
    intlId: "nav.home",
    defMsg: "Home",
    path: "/",
  },
  {
    id: "3",
    intlId: "nav.about",
    defMsg: "About",
    path: "/about",
    dropDownLinks: [
      { intlId: "nav.ourData", sectionId: "about-us", path: "/about" },
      { intlId: "nav.dashboard", sectionId: "", path: "/dashboard" },
      { intlId: "nav.ourTeam", sectionId: "", path: "/our-org#our-team" },
      { intlId: "nav.ourSupporters", sectionId: "", path: "/oursupporters" },
    ],
  },
  {
    id: "4",
    intlId: "nav.ourtech",
    defMsg: "Our Approach",
    path: "/our-approach",
    classes: "text-white",
  },
  {
    id: "5",
    intlId: "nav.faqs",
    defMsg: "FAQs",
    path: "/FAQs",
  },
];

const mobileNavLinks = [
  {
    id: "home",
    intlId: "nav.home",
    defaultMessage: "Home",
    path: "/",
  },
  {
    id: "about-us",
    intlId: "nav.about",
    defaultMessage: "About Us",
    paths: [
      { intlId: "nav.ourData", path: "/about/#about-us" },
      { intlId: "nav.dashboard", path: "/dashboard/" },
      { intlId: "nav.ourTeam", path: "/our-org/#our-team" },
      { intlId: "nav.ourSupporters", path: "/oursupporters" },
    ],
  },
  {
    id: "technology",
    intlId: "nav.ourtech",
    defMsg: "Our Technology",
    path: "/our-approach",
  },
  {
    id: "faqs",
    intlId: "nav.faqs",
    defaultMessage: "FAQs",
    path: "/FAQs",
  },
];

const buttonJoinUs = [
  {
    intlId: "nav.joinUs",
    defMsg: "Join Us",
    path: "/get-involved",
    btnStyle: true,
    classes: "text-white bg-blue py-2 px-6",
  },
  {
    intlId: "nav.donate",
    defMsg: "Donate",
    path: "",
    btnStyle: true,
    classes: "text-white bg-blue py-2 px-6",
  },
];
export { navLinks, buttonJoinUs, mobileNavLinks };
