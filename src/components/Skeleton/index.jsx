import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = () => (
  <ContentLoader
    speed={2}
    width={260}
    height={400}
    viewBox="0 0 260 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="65" cy="65" r="65" />
    <rect x="0" y="197" rx="0" ry="0" width="179" height="0" />
    <rect x="-3" y="143" rx="16" ry="16" width="134" height="26" />
    <rect x="-11" y="179" rx="0" ry="0" width="139" height="29" />
    <rect x="2" y="219" rx="0" ry="0" width="55" height="15" />
    <rect x="72" y="218" rx="0" ry="0" width="53" height="17" />
  </ContentLoader>
);

export default SkeletonLoader;
