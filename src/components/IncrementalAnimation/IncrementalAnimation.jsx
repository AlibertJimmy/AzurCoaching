import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const NumberAnimationContainer = styled.div`
  font-size: 24px;
  text-align: center;
  animation: increaseNumber 2s ease-in-out forwards;
`;

const Number = styled.span`
  display: inline-block;
  width: 2em;
  text-align: center;
`;

function IncrementalAnimation({ endValue }) {
  const animationDuration = 4000; // Animation duration in milliseconds
  const totalSteps = 60; // Total number of animation steps

  const step = (endValue - 0) / totalSteps; // Calculate the linear step
  const containerRef = useRef(null);

  useEffect(() => {
    let currentValue = 0;
    let animationFinished = false;

    const incrementNumber = () => {
      if (currentValue < endValue && !animationFinished) {
        currentValue += step;
        if (currentValue >= endValue) {
          currentValue = endValue; // Ensure the end value is reached exactly
          animationFinished = true;
        }
        containerRef.current.innerText = Math.round(currentValue);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(incrementNumber, animationDuration / totalSteps);

        return () => {
          clearInterval(interval);
          observer.disconnect();
        };
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [endValue, step]);

  return (
    <NumberAnimationContainer ref={containerRef}>
      <Number>0</Number>
    </NumberAnimationContainer>
  );
}

export default IncrementalAnimation;
