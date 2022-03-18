import React, { useEffect, useRef } from "react";
const LazyLoadImg = ({ url }) => {
  const imgRef = useRef();
  useEffect(() => {
    const img = imgRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute("src", url);
        img.classList.add("active");
      }
    });
    if (img) {
      observer.observe(img);
    }
    return () => {
      if (img) observer.unobserve(img);
    };
  }, []);
  return <img alt={url} ref={imgRef} className="lazy-load" />;
};

export default LazyLoadImg;
