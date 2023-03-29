import { PageSEO } from '@/components';
import { getSEO } from '@/lib/utils';
import { StyleProvider } from '@/page-modules/Legals';
import { Link, PageProps } from 'gatsby';
import React from 'react';

//* Component
const CookiePolicy = (props: PageProps) => {
  //
  const { location } = props;
  const { pathname } = location;
  const seo = getSEO(pathname);

  return (
    <>
      <PageSEO
        description={seo.description}
        featureImage="og-cookie-policy.jpg"
        pathname={pathname}
        title={seo.title}
      />
      <article>
        <section className="py-8 page-width md:py-12">
          <div className="mb-6 text-center sm:mb-12 ">
            <h1 className="mb-2 heading heading--level-2">Cookie Policy</h1>
            <p className="text-sm text-black">Last Modified: 31st March 2022</p>
          </div>

          <StyleProvider>
            <div className="max-w-lg mx-auto">
              <p>This website stores cookies on your computer.</p>
              <p>
                These cookies are used to collect information about how you
                interact with our website and allow us to remember you.
              </p>
              <p>
                We use this information in order to improve and customize your
                browsing experience and for analytics and metrics about our
                visitors both on this website and other media.
              </p>

              <p>
                Our interactive websites use cookies to let us retrieve the
                user’s details for each visit. Cookies are used by our website
                to enable the functionality of certain areas to make it easier
                for people visiting our website.
              </p>

              <p>
                To find out more about the cookies we use, see our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </StyleProvider>
        </section>
      </article>
    </>
  );
};

export default CookiePolicy;
