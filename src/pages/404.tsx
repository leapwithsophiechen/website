import { PageSEO } from '@/components';
import { getSEO } from '@/lib/utils';
import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';

function NotFound(props: PageProps) {
  //
  const { location } = props;
  const { pathname } = location;
  const seo = getSEO(pathname);

  return (
    <>
      <PageSEO
        description={seo.description}
        featureImage="og-default.jpg"
        pathname={pathname}
        title={seo.title}
      />
      <article>
        <h1>404</h1>
        <section>Not found</section>
      </article>
      404
    </>
  );
}

export default NotFound;
