import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out', // Adjust timing as needed
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
