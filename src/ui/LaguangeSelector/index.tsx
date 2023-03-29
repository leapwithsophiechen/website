import { Link, useI18next } from 'gatsby';
import React from 'react';

interface Props {
  path: string;
}

function Component(props: Props) {
  //
  const { path } = props;

  return (
    <div className="flex">
      <Link language="bm" to={path}>
        BM
      </Link>
      <Link language="en" to={path}>
        English
      </Link>
    </div>
  );
}

export const LaguangeSelector = Component;
