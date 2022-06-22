import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="276" rx="8" ry="8" width="281" height="27" />
      <rect x="2" y="317" rx="8" ry="8" width="280" height="88" />
      <rect x="0" y="415" rx="8" ry="8" width="280" height="45" />
      <circle cx="135" cy="130" r="130" />
    </ContentLoader>
  );
};

export default PizzaSkeleton;
