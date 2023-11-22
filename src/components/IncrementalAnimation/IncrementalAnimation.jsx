// Import React Libraries
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// Import Style
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

function IncrementalAnimation ({ endValue }) {
  const animationDuration = 4000; // Animation duration in milliseconds
  const totalSteps = 60; // Total number of animation steps

  const step = (endValue - 0) / totalSteps;
  const containerRef = useRef(null);
  const [animationFinished, setAnimationFinished] = useState(false);
  let interval;

  useEffect(() => {
    let currentValue = 0;

    const incrementNumber = () => {
      if (currentValue < endValue && !animationFinished) {
        currentValue += step;
        if (currentValue >= endValue) {
          currentValue = endValue;
          setAnimationFinished(true);
        }
        if (containerRef.current) {
          containerRef.current.innerText = Math.round(currentValue);
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animationFinished) {
        interval = setInterval(incrementNumber, animationDuration / totalSteps);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      // Cleanup logic when the component is unmounted
      clearInterval(interval);
      observer.disconnect();
    };
  }, [endValue, step, animationFinished]);

  return (
    <NumberAnimationContainer ref={containerRef}>
      <Number>0</Number>
    </NumberAnimationContainer>
  );
}

IncrementalAnimation.propTypes = {
  endValue: PropTypes.number.isRequired
};

export default IncrementalAnimation;
