"use client";

import React, { useState } from "react";

const CourseImage = ({ src, alt, className }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
};

export default CourseImage;
