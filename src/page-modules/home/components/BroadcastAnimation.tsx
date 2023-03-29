import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';

//* Styled components
const Container = styled.div`
  ${tw`relative overflow-visible`};
  z-index: 0;
  height: 50px;
  width: 50px;

  @keyframes broadcast {
    0% {
      transform: scale3d(1, 1, 1);
      opacity: 0.15;
    }
    100% {
      transform: scale3d(4, 4, 1);
      opacity: 0;
    }
  }

  .ring-1 {
    animation: 3s broadcast infinite ease-out;
    transform-origin: center;
    fill: #f2dad6;
  }

  .ring-2 {
    animation: 3s broadcast infinite ease-out;
    animation-delay: 300ms;
    transform-origin: center;
    fill: #ebc7c0;
  }

  .ring-3 {
    animation: 3s broadcast infinite ease-out;
    animation-delay: 600ms;
    transform-origin: center;
    fill: #e7b7ae;
  }
`;

function Component(props: any) {
  //

  return (
    <Container>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 50 50"
        {...props}
        overflow="visible"
      >
        <circle className="ring-1" cx="25" cy="25" fill="#f4f4f4" r="25" />
        <circle className="ring-2" cx="25" cy="25" fill="#f4f4f4" r="25" />
        <circle className="ring-3" cx="25" cy="25" fill="#f4f4f4" r="25" />
      </svg>
    </Container>
  );
}

export const BroadcastAnimation = Component;
