import React from 'react';

export const PieChartClipArt = (props: any) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 50 50" {...props}>
    <path className="piechartclipart-tr" d="M50,25H25V0A25,25,0,0,1,50,25Z" />
    <path className="piechartclipart-br" d="M50,25A25,25,0,0,1,25,50V25Z" />
    <path className="piechartclipart-bl" d="M25,25V50A25,25,0,0,1,0,25Z" />
    <path className="piechartclipart-tl" d="M25,0V25H0A25,25,0,0,1,25,0Z" />
  </svg>
);
