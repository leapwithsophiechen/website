/* eslint-disable max-len */
import { PageSEO } from '@/components';
import { sitedata } from '@/data';
import { getSEO } from '@/lib/utils';
import { StyleProvider } from '@/page-modules/Legals';
import styled from '@emotion/styled';
import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

const { siteName, siteUrl } = sitedata;

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
const TermsOfUse = (props: PageProps) => {
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
        featureImage="og-terms-of-use.jpg"
        pathname={pathname}
        title={seo.title}
      />
      <article>
        <section className="py-8 page-width md:py-12">
          <div className="mb-6 text-center sm:mb-12 ">
            <h1 className="mb-2 heading heading--level-2">Terms of Use</h1>
            <p className="text-sm text-black">Last Modified: 31st March 2022</p>
          </div>

          <StyleProvider>
            <ColumnContainer>
              <div className="block">
                <p>
                  These terms and conditions outline the rules and regulations
                  for the use of {siteName} Website, located at{' '}
                  <Link className="inline-link" to="/">
                    {siteUrl}
                  </Link>
                  .
                </p>
                <p>
                  By accessing this Website we assume you accept these terms and
                  conditions. Do not continue to use <strong>{siteUrl}</strong>{' '}
                  if you do not agree to take all of the terms and conditions
                  stated on this page.
                </p>
              </div>
              <div className="block">
                <h2>Terminology</h2>
                <p>
                  The following terminology applies to these Terms and
                  Conditions, Privacy Policy and all Agreements:
                </p>
                <ul>
                  <li>
                    <strong>&quot;Visitor&quot;</strong>,{' '}
                    <strong>&quot;You&quot;</strong> and{' '}
                    <strong>&quot;your&quot;</strong> refers to you, the person
                    log on this Website compliant to this website’s{' '}
                    <strong>Terms and Conditions</strong>.
                  </li>
                  <li>
                    <strong>&quot;The Company&quot;</strong>,{' '}
                    <strong>&quot;Ourselves&quot;</strong>,{' '}
                    <strong>&quot;We&quot;</strong>,{' '}
                    <strong>&quot;Our&quot;</strong> and{' '}
                    <strong>&quot;Us&quot;</strong>, refers refers to our
                    Company. <strong>&quot;Party&quot;</strong>,{' '}
                    <strong>&quot;Parties&quot;</strong>, or{' '}
                    <strong>&quot;Us&quot;</strong>, refers to both the visitor
                    and ourselves.
                  </li>
                </ul>
                <p>
                  Any use of the above terminology or other words in the
                  singular, plural, capitalization and/or he/she or they, are
                  taken as interchangeable and therefore as referring to same.
                </p>

                <p>
                  By accessing this Website, you agreed to use cookies in
                  agreement with the Website&apos;s{' '}
                  <Link className="inline-link" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="block">
                <h2>License</h2>
                <p>
                  Unless otherwise stated, <strong>{siteName}</strong> and/or
                  its licensors own the intellectual property rights for all
                  material on <strong>{siteUrl}</strong>. All intellectual
                  property rights are reserved. You may access this from{' '}
                  <strong>{siteUrl}</strong> for your own personal use subjected
                  to restrictions set in these terms and conditions.
                </p>

                <p>
                  <strong>You must not:</strong>
                </p>
                <ul>
                  <li>
                    Republish material from <strong>{siteUrl}</strong>.
                  </li>
                  <li>
                    Sell, rent or sub-license material from{' '}
                    <strong>{siteUrl}</strong>.
                  </li>
                  <li>
                    Reproduce, duplicate or copy material from{' '}
                    <strong>{siteUrl}</strong>.
                  </li>
                  <li>
                    Redistribute content from <strong>{siteUrl}</strong>.
                  </li>
                </ul>
              </div>
              <div className="block">
                <h2>Hyperlinking to our Content</h2>
                <p>
                  The following organizations may link to our Website without
                  prior written approval:
                </p>

                <ul>
                  <li>Government agencies.</li>
                  <li>Search engines.</li>
                  <li>News organizations.</li>
                  <li>
                    Online directory distributors may link to our Website in the
                    same manner as they hyperlink to the websites of other
                    listed businesses and System wide Accredited Businesses
                    except soliciting non-profit organizations, charity shopping
                    malls, and charity fundraising groups which may not
                    hyperlink to our Website. These organizations may link to
                    our home page, to publications or to other Website
                    information so long as the link:
                    <ul>
                      <li>Is not in any way deceptive</li>
                      <li>
                        Does not falsely imply sponsorship, endorsement or
                        approval of the linking party and its products and/or
                        services.
                      </li>
                      <li>
                        Fits within the context of the linking party’s site.
                      </li>
                    </ul>
                  </li>
                </ul>

                <p>
                  No use of {siteName}&apos;s logo or other artwork will be
                  allowed for linking absent a trademark license agreement.
                </p>
              </div>

              <div className="block">
                <h2>iFrames</h2>
                <p>
                  Without prior approval and written permission, you may not
                  create frames around our Webpages.
                </p>
              </div>

              <div className="block">
                <h2>Reservation of Rights</h2>
                <p>
                  We reserve the right to request that you remove all links or
                  any particular link to our Website. You approve to immediately
                  remove all links to our Website upon request.
                </p>
                <p>
                  We also reserve the right to amen these terms and conditions
                  and it’s linking policy at any time.
                </p>
                <p>
                  By continuously linking to our Website, you agree to be bound
                  to and follow these linking terms and conditions.
                </p>
              </div>

              <div className="block">
                <h2>Removal of links from our Website</h2>
                <p>
                  If you find any link on our Website that is offensive for any
                  reason, you are free to contact and inform us any moment.
                </p>
                <p>
                  We will consider requests to remove links but we are not
                  obligated to or so or to respond to you directly.
                </p>
                <p>
                  We do not ensure that the information on this Website is
                  correct, we do not warrant its completeness or accuracy; nor
                  do we promise to ensure that the Website remains available or
                  that the material on the Website is kept up to date.
                </p>
              </div>

              <div className="block">
                <h2>Disclaimer</h2>
                <p>Nothing in this disclaimer will:</p>
                <ul>
                  <li>
                    Limit or exclude our or your liability for death or personal
                    injury.
                  </li>
                  <li>
                    Limit or exclude our or your liability for fraud or
                    fraudulent misrepresentation.
                  </li>
                  <li>
                    Limit any of our or your liabilities in any way that is not
                    permitted under applicable law.
                  </li>
                  <li>
                    Exclude any of our or your liabilities that may not be
                    excluded under applicable law.
                  </li>
                  <li>
                    The limitations and prohibitions of liability set in this
                    Section and elsewhere in this disclaimer:
                    <ul>
                      <li>Are subject to the preceding paragraph.</li>
                      <li>
                        Govern all liabilities arising under the disclaimer,
                        including liabilities arising in contract, in tort and
                        for breach of statutory duty. As long as the website and
                        the information and services on the website are provided
                        free of charge, we will not be liable for any loss or
                        damage of any nature.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </ColumnContainer>
          </StyleProvider>
        </section>
      </article>
    </>
  );
};

export default TermsOfUse;
