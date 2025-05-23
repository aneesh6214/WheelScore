import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    margin-top: -100px;
    margin-left: -100px;
    perspective: 600px;
    transform-style: perserve-3d;
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
    border-radius: 100px;
    border: 20px solid #1e3f57;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    animation: dot 3s cubic-bezier(.67,.08,.46,1.5) infinite;
  }

  .dot:nth-child(2) {
    animation-delay: 200ms;
  }

  .dot:nth-child(3) {
    animation-delay: 400ms;
  }

  .dot:nth-child(4) {
    animation-delay: 600ms;
  }

  .dot:nth-child(5) {
    animation-delay: 800ms;
  }

  .dot:nth-child(6) {
    animation-delay: 1000ms;
  }

  .dot:nth-child(7) {
    animation-delay: 1200ms;
  }

  .dot:nth-child(8) {
    animation-delay: 1400ms;
  }

  @keyframes dot {
    0% {
      opacity: 0;
      border-color: #6bb2cd;
      transform: rotateX(60deg) rotateY(45deg) translateZ(-100px) scale(0.1);
    }

    40% {
      opacity: 1;
      transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }

    100% {
      opacity: 0;
      transform: rotateX(60deg) rotateY(-45deg) translateZ(-100px) scale(0.1);
    }
  }`;

export default Loader;
