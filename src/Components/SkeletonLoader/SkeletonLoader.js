import React from "react";
import ContentLoader from "react-content-loader";
import './SkeletonLoader.css';

function SkeletonLoader() {
  return (
    <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon"></span>
    <p className="LoadingTodo-text"></p>
    <span className="LoadingTodo-deleteIcon"></span>
    </div>
    // <ContentLoader
    //   speed={2}
    //   width={500}
    //   height={150}
    //   viewBox="0 0 400 150"
    //   foregroundColor="#dbdbdb"
    // >
    //   <circle cx="10" cy="20" r="8" />
    //   <rect x="25" y="15" rx="5" ry="5" width="420" height="10" />
    //   <circle cx="10" cy="50" r="8" />
    //   <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    //   <circle cx="10" cy="80" r="8" />
    //   <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    //   <circle cx="10" cy="110" r="8" />
    //   <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    // </ContentLoader>
  );
}

export { SkeletonLoader }
