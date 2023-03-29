import { PageSEO } from '@/components';
import { getSEO } from '@/lib/utils';
import styled from '@emotion/styled';
import { graphql, Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import tw from 'twin.macro';

//* Styled components
const Article = styled.article`
  ${tw`bg-light-bg`};
`;

//* Component
function About(props: PageProps) {
  //
  //* Destructured props
  const { location } = props;
  const { pathname } = location;
  const seo = getSEO(pathname);

  //* Markup
  return (
    <>
      <PageSEO
        description={seo.description}
        featureImage="og-default.jpg"
        pathname={pathname}
        title={seo.title}
      />
      <Article>
        <section className="py-8 page-width md:py-12">
          <div className="max-w-md mx-auto md:max-w-3xl">
            <h1 className="mb-6 text-center sm:mb-12 heading heading--level-2">
              My Story
            </h1>
            <div className="max-w-lg mx-auto">
              <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
                <StaticImage
                  alt=""
                  className="w-full h-full"
                  src="../images/sophie.jpg"
                />
              </div>
            </div>
            <div className="px-4 leading-7 sm:px-0">
              <p className="mb-6">
                I am a certified coach with the Institute of Executive Coaching
                & Leadership, accredited by International Coach Federation and
                the Founder of “Leap with Sophie Chen”.
              </p>
              <p className="mb-6">
                A recognized hospitality leader with 25 years of extensive
                hospitality management experience. Having worked for Fortune 500
                companies, luxury hotel and casino operators like Sands China
                Limited, Wynn Resorts, Marriott International and Mandarin
                Oriental Hotel Group in Malaysia and Macau, I have first-hand
                experience in managing adversity and diversity. My portfolio
                includes having managed up to 700 team members, multiple
                properties and large-scale operations in fast paced and
                challenging environments.
              </p>
              <p className="mb-6">
                I understand what it takes to be a female leader in a male
                dominating world. Had to constantly juggle egos and demands of
                (mainly male) stakeholders, keep up appearances, live up to the
                norm and battle deep seated biases throughout my career.
                Unfortunately, I did not get to where I am without being labeled
                as ‘bossy’, ‘demanding’ and ‘aggressive’. I do not apologize for
                being a woman (neither should you) but I wished I did not have
                to walk the journey alone.
              </p>
              <p className="mb-6">
                Hence, “Leap with Sophie Chen” was founded. I strongly believe
                that leaders excel better with a ‘sparring’ partner and
                trustworthy confidant. I find that women executives understand
                each other better as we all face similar struggles.
              </p>
              <p className="mb-6">
                It is said that women are representing the biggest emerging
                market opportunity, however there is not much concrete framework
                available to help them succeed and that is the jarring truth.
              </p>
              <p className="mb-6">
                I currently reside in Singapore with my very supportive husband.
                When I’m not coaching, I (sometimes) bike and swim, experiment
                new recipes, (tries to) make sourdough bread and entertain my
                social circle who is usually rather eager to be my guinea pigs.
              </p>
            </div>
          </div>
        </section>
      </Article>
    </>
  );
}

export default About;
