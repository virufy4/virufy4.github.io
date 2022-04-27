import React from "react";
import { Link } from "gatsby-plugin-intl";

const tailwindClasses =
  "inline-block text-lg py-3 px-12 no-underline rounded-xl";

const styles = {
  primary: "text-white bg-blue",
  secondary: "text-black bg-white",
};

function generateClassName(classNameProp, style = "primary") {
  return `${tailwindClasses} ${styles[style]} ${classNameProp}`;
}

export function ButtonLink({ children, style, ...props }) {
  return (
    <Link {...props} className={generateClassName(props.className, style)}>
      {children}
    </Link>
  );
}

export default ({ children, style, ...props }) => {
  return (
    <button {...props} className={generateClassName(props.className, style)}>
      {children}
    </button>
  );
};
