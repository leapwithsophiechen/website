import { PageSEO } from '@/components';
import { sitedata } from '@/data';
import { getSEO } from '@/lib/utils';
import { StyleProvider } from '@/page-modules/Legals';
import styled from '@emotion/styled';
import { Link, PageProps } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

const { locations, siteUrl } = sitedata;
const { location1 } = locations;
const { address } = location1;

//* Styled components
const ColumnContainer = styled.div`
  ${tw`relative px-4`};

  @media (min-width: 992px) {
    column-count: 2;
    column-rule-style: solid;
    column-rule-width: 1px;
    column-rule-color: #e9bcb7;
    column-gap: 6rem;
  }
`;

//* Component
const PrivacyPolicy = (props: PageProps) => {
  //
  //* Destructure props
  const { location } = props;
  const { pathname } = location;

  const seo = getSEO(pathname);

  //* Markup
  return (
    <>
      <PageSEO
        description={seo.description}
        featureImage="og-privacy-policy.jpg"
        pathname={pathname}
        title={seo.title}
      />
      <article>
        <section className="py-8 page-width md:py-12">
          <div className="mb-6 text-center sm:mb-12 ">
            <h1 className="mb-2 heading heading--level-2">Privacy Policy</h1>
            <p className="text-sm text-black">Last Modified: 31st March 2022</p>
          </div>

          <StyleProvider>
            <ColumnContainer>
              <div className="block">
                <p className="end">
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit{' '}
                  <Link className="inline-link" to="/">
                    {siteUrl}
                  </Link>{' '}
                  &#40;the “Site”&#41;.
                </p>
              </div>

              <div className="block">
                <h2>Personal Information We Collect</h2>
                <p>
                  When you visit the Site, we automatically collect certain
                  information about your device, including information about
                  your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device. Additionally, as
                  you browse the Site, we collect information about the
                  individual web pages that you view, what websites or search
                  terms referred you to the Site, and information about how you
                  interact with the Site. We refer to this
                  automatically-collected information as “Device Information.”
                </p>
                <p>
                  <strong>
                    We collect Device Information using the following
                    technologies:
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>“Cookies”</strong> are data files that are placed on
                    your device or computer and often include an anonymous
                    unique identifier. For more information about cookies, and
                    how to disable cookies, visit{' '}
                    <a
                      href="https://www.allaboutcookies.org/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://www.allaboutcookies.org/
                    </a>
                  </li>
                  <li>
                    <strong>“Log files”</strong> track actions occurring on the
                    Site, and collect data including your IP address, browser
                    type, Internet service provider, referring/exit pages, and
                    date/time stamps.
                  </li>
                  <li>
                    <strong>
                      &ldquo;Web beacons&ldquo;, &ldquo;tags&ldquo;, and
                      &ldquo;pixels&ldquo;
                    </strong>
                    are electronic files used to record information about how
                    you browse the site.
                  </li>
                </ul>
                <p>
                  When we talk about <strong>“Personal Information”</strong> in
                  this Privacy Policy, we are talking both about Device
                  Information.
                </p>
              </div>
              <div className="block">
                <h2>How Do We Use Your Personal Information?</h2>
                <p>
                  We use the Device Information that we collect to help us
                  screen for potential risk and more generally to improve and
                  optimize our Site. For example, by generating analytics about
                  how our visitors browse and interact with the Site, and to
                  assess the success of our marketing and advertising
                  campaigns&#41;.
                </p>
                <p>
                  We use Google Analytics to help us understand how our visitors
                  use the Site. You can read more about how Google uses your
                  Personal Information here:{' '}
                  <a
                    className="inline-link"
                    href="https://www.google.com/intl/en/policies/privacy/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://www.google.com/intl/en/policies/privacy/
                  </a>
                  .
                </p>
                <p>
                  You can also opt-out of Google Analytics here:{' '}
                  <a
                    className="inline-link"
                    href="https://tools.google.com/dlpage/gaoptout"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </p>
                <p>
                  We may also share your Personal Information to comply with
                  applicable laws and regulations, to respond to a subpoena,
                  search warrant or other lawful request for information we
                  receive, or to otherwise protect our rights.
                </p>
              </div>
              <div className="block">
                <h2>Do Not Track</h2>
                <p className="mb-20">
                  Please note that we do not alter our Site’s{' '}
                  <strong> data collection and use practices</strong> when we
                  see a <strong>Do Not Track</strong> signal from your browser.
                </p>
              </div>
              <div className="block">
                <h2>Your Rights if you are a European resident</h2>
                <p>
                  You have the right to access personal information we hold
                  about you and to ask that your personal information be
                  deleted. If you would like to exercise this right, please
                  contact us through the contact information below.
                </p>
                <p>
                  Additionally, if you are a European resident we note that we
                  are processing your information in order to fulfill contact
                  form submissions.
                </p>
                <p>
                  Additionally, please note that your information will be
                  transferred outside of Europe, including to the United States,
                  Malaysia and Singapore.
                </p>
              </div>
              <div className="block">
                <h2>Changes</h2>
                <p>
                  We may update this privacy policy from time to time in order
                  to reflect, for example, changes to our practices or for other
                  operational, legal or regulatory reasons.
                </p>
              </div>
              <div className="block">
                <h2>Contact Us</h2>
                <p>
                  For more information about our privacy practices, if you have
                  questions, or if you would like to make a complaint, please
                  contact us by:
                </p>
                <ul>
                  <li>
                    Email:{' '}
                    <a
                      className="inline-link"
                      href={`mailto:${location1.emails[0]}`}
                    >
                      {location1.emails[0]}
                    </a>
                  </li>
                  <li>
                    <Link to="/contact/">Contact Form</Link>
                  </li>
                </ul>
                <p className="mb-2">
                  By mail using the details provided below:
                </p>
                <blockquote>
                  <div />
                  <address>
                    {address.streetAddress1},
                    <br />
                    {address.streetAddress2},
                    <br />
                    {address.postalCode} {address.addressLocality}
                  </address>
                </blockquote>
              </div>
            </ColumnContainer>
          </StyleProvider>
        </section>
      </article>
    </>
  );
};

export default PrivacyPolicy;
