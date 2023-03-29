import {
  Checkmark,
  LeftQuote,
  LogoFull,
  LogoMark,
  LogoMarkReversed,
  LogoType,
  PageSEO,
} from '@/components';
import { Video } from '@/components/Video';
import { getSEO } from '@/lib/utils';
import {
  Button,
  DarkMode,
  LightMode,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import tw from 'twin.macro';

//* Interfaces / types

//* Styled components
const LeadMagnetContainer = styled.section`
  ${tw`relative w-full pt-8 pb-16 overflow-hidden bg-white sm:py-24`};
`;

const LeadMagnetGrid = styled.div`
  ${tw`relative grid h-full max-w-4xl px-4 mx-auto gap-y-12 md:grid-cols-2 sm:gap-x-8 md:gap-x-16`};

  .grid-cell-1 {
    grid-area: cell1;
    ${tw`relative flex items-center justify-center h-full sm:justify-end`}
  }

  .grid-cell-2 {
    grid-area: cell2;
    ${tw`relative flex items-center justify-center h-full sm:justify-start`}
  }

  grid-template-areas:
    'cell2'
    'cell1';

  @media (min-width: 640px) {
    grid-template-areas: 'cell1 cell2';
  }
`;

const LeadMagnetCTAContainer = styled.div`
  max-width: 370px;
  ${tw`text-center sm:text-left`}
  h1 {
    ${tw`mb-10 text-4xl text-black font-cursive md:text-5xl`};
    line-height: 1.5;
  }
`;

const LeadMagnetImageContainer = styled.div`
  ${tw`relative w-full mx-auto overflow-hidden md:mx-0`};
`;

const HeroContainer = styled.section`
  ${tw`relative w-full pt-8 pb-16 overflow-hidden sm:py-24 bg-brand-green-shaded`};
`;

const HeroGrid = styled.div`
  ${tw`relative grid h-full max-w-4xl px-4 mx-auto gap-y-12 md:grid-cols-2 sm:gap-x-8 md:gap-x-16`};

  .grid-cell-1 {
    grid-area: cell1;
    ${tw`relative flex items-center justify-center h-full sm:justify-end`}
  }

  .grid-cell-2 {
    grid-area: cell2;
    ${tw`relative flex items-center justify-center h-full sm:justify-start`}
  }

  grid-template-areas:
    'cell1'
    'cell2';

  @media (min-width: 640px) {
    grid-template-areas: 'cell1 cell2';
  }
`;

const CTAContainer = styled.div`
  max-width: 370px;
  ${tw`text-center sm:text-left`}
  h1 {
    ${tw`mb-10 text-4xl text-white font-cursive md:text-5xl`};
    line-height: 1.5;
  }
`;

const ImageContainer = styled.div`
  ${tw`relative w-full mx-auto overflow-hidden shadow-lg md:mx-0`};
`;

const Grid1 = styled.div`
  ${tw`grid max-w-md mx-auto lg:grid-cols-2 gap-y-12 md:max-w-full gap-x-8`};

  .grid-cell-1 {
    ${tw`flex`};
    grid-area: cell1;
  }
  .grid-cell-2 {
    ${tw`flex items-center`};
    grid-area: cell2;
  }

  grid-template-areas:
    'cell1'
    'cell2';

  @media (min-width: 768px) {
    grid-template-areas: 'cell2 cell1';
  }
`;

const Grid2 = styled.section`
  ${tw`relative grid max-w-4xl mx-auto gap-x-8`}

  .grid-cell-1 {
    grid-area: cell1;
    ${tw`relative items-center justify-end hidden overflow-hidden`}

    svg {
      max-height: 240px;
      height: 100%;
    }
  }

  .grid-cell-2 {
    grid-area: cell2;
    ${tw`relative py-8 sm:py-16`}
  }

  grid-template-areas:
    'cell1'
    'cell2';

  @media (min-width: 768px) {
    grid-template-columns: 200px 1fr;
    grid-template-areas: 'cell1 cell2';
    .grid-cell-1 {
      ${tw`flex`}
    }
  }
`;

const Grid3 = styled.section`
  ${tw`relative grid max-w-4xl mx-auto gap-x-8`}

  .grid-cell-1 {
    grid-area: cell1;
    ${tw`relative py-8 sm:py-16`}
  }

  .grid-cell-2 {
    grid-area: cell2;
    ${tw`relative items-center justify-start hidden overflow-hidden`}

    svg {
      max-height: 240px;
      height: 100%;
    }
  }

  grid-template-areas:
    'cell2'
    'cell1';

  @media (min-width: 768px) {
    grid-template-columns: 1fr 200px;
    grid-template-areas: 'cell1 cell2';
    .grid-cell-2 {
      ${tw`flex`}
    }
  }
`;

//* Component
function Home(props: PageProps) {
  //
  //* Destructured props
  const { location } = props;
  const { pathname } = location;

  const seo = getSEO(pathname);

  //* Markup
  return (
    <>
      <PageSEO
        description="Leap with Sophie Chen"
        featureImage="og-default.jpg"
        pathname={pathname}
        title="Leap with Sophie Chen"
      />
      <article className="text-base leading-7">
        <LeadMagnetContainer>
          <LeadMagnetGrid className="page-width">
            <div className="grid-cell-2">
              <LeadMagnetImageContainer>
                <StaticImage
                  alt=""
                  className="w-full h-full"
                  loading="eager"
                  placeholder="none"
                  src="../images/save-the-date.jpg"
                />
              </LeadMagnetImageContainer>
            </div>
            <div className="grid-cell-1">
              <LeadMagnetCTAContainer>
                <h1 className="text-center">
                  Discover fast ways to re-fuel your passion, to be challenged
                  and inspired again.
                </h1>
                <div className="text-center">
                  <DarkMode>
                    <a
                      className="px-4 py-3 mt-4 text-lg font-bold text-white bg-brand-green"
                      href="https://training.leapwithsophiechen.com/masterclass"
                    >
                      SAVE THE DATE
                    </a>
                  </DarkMode>
                </div>
              </LeadMagnetCTAContainer>
            </div>
          </LeadMagnetGrid>
        </LeadMagnetContainer>
        <HeroContainer>
          <HeroGrid className="page-width">
            <div className="grid-cell-1">
              <LogoFull className="w-48 max-w-sm mx-auto shadow-2xl sm:w-full" />
            </div>
            <div className="grid-cell-2">
              <CTAContainer>
                <h1 className="text-center">
                  Provoke passionate and ambitious female leaders to articulate
                  their strengths and amplify their voices.
                </h1>
                <div className="text-center">
                  <DarkMode>
                    <Button
                      as="a"
                      href="https://calendly.com/sophieylchen/15min"
                      size="lg"
                      target="_blank"
                      variant="solid"
                    >
                      Let&apos;s Connect
                    </Button>
                  </DarkMode>
                </div>
              </CTAContainer>
            </div>
          </HeroGrid>
        </HeroContainer>

        <section className="px-4 py-20 overflow-hidden md:py-28 bg-gray-50">
          <div className="page-width">
            <h2 className="relative max-w-3xl mx-auto mb-8 text-center heading heading--level-2 text-heading-dark md:mb-20 z-1">
              Leadership and Executive Coach{' '}
              <span className="whitespace-nowrap">for Women</span>
            </h2>
            <Grid1>
              <div className="grid-cell-1">
                <ImageContainer>
                  <StaticImage
                    alt=""
                    className="w-full h-full"
                    loading="eager"
                    placeholder="none"
                    src="../images/profile.jpg"
                  />
                </ImageContainer>
              </div>
              <div className="grid content-end grid-cell-2">
                <div className="max-w-md mx-auto">
                  <div>
                    <h2 className="mb-3 text-dark heading heading--level-3">
                      Unleash Your Potential
                    </h2>
                  </div>
                  <p className="mb-4 text-text-dark">
                    Over the past 25 years of corporate life, I have supported{' '}
                    women in leadership roles to develop self-worth and unleash
                    their potential.
                  </p>
                  <p className="mb-4 text-text-dark">
                    Through the years, I mentored a great number of
                    high-performing individuals and am currently working with
                    leaders who are passionate about living in alignment with
                    their values and are committed to challenging their status
                    quo. Personal and professional development through greater
                    self-awareness and self-reflection is pivotal for leaders.
                  </p>
                  <p className="text-text-dark">
                    I can help you with that by ‘unpacking your suitcase’ and
                    throw out what is no longer serving you. Instead, we fill it
                    with courage, self-compassion, resilience, authenticity and
                    purpose. Let me be the change champion for you through my{' '}
                    executive, leadership and career coaching sessions.
                  </p>
                </div>
              </div>
            </Grid1>
          </div>
        </section>

        <section className="relative flex items-center px-4 py-12 text-lg sm:py-24 lg:px-20">
          <div className="max-w-md mx-auto md:text-center md:max-w-3xl">
            <h2 className="mb-3 heading heading--level-3">Who I Work With</h2>
            <p>
              My clients are female leaders who are passionate, ambitious,
              focused, personally accountable and committed to achieving their
              goals. They are primarily from the hospitality, casino, travel and
              service sectors.
            </p>
          </div>
        </section>

        <div className="px-4 py-8 text-white sm:py-24 bg-brand-green md:text-center">
          <div className="max-w-md mx-auto md:max-w-3xl">
            <p className="mb-4 text-3xl font-cursive">
              “The best way to get a seat at the table is to pull up a chair. Do
              not wait to be invited because the invitation may never come”
            </p>
            <p className="font-bold">Indra Nooyi</p>
          </div>
        </div>

        <section className="relative py-20 md:py-32">
          <div className="relative max-w-md px-4 mx-auto mb-12 md:text-center md:max-w-3xl">
            <h2 className="mb-8 heading heading--level-2 text-heading-dark">
              Coaching with{' '}
              <span className="whitespace-nowrap">Sophie Chen</span>
            </h2>
            <p className="text-text-dark">
              Coaching with Sophie is a journey. A journey where she supports
              you in pulling up a chair without waiting for an invitation. A
              journey where she helps you ‘unpack your suitcase’ to uncover the
              blockers and barriers which are limiting your{' '}
              <span className="whitespace-nowrap">growth and potential</span>.
            </p>
          </div>
          <div className="max-w-md px-8 mx-auto shadow bg-gray-50 md:max-w-3xl">
            <Grid2>
              <div className="grid-cell-1">
                <LogoMarkReversed />
              </div>
              <div className="grid-cell-2">
                <p className="mb-2 text-black">
                  In <strong>leadership coaching</strong>, you will be supported
                  in
                </p>
                <ul className="ml-8 space-y-1 list-disc">
                  <li>Uncovering your hidden strengths</li>
                  <li>Revealing your innate qualities</li>
                  <li>Exuding your confidence</li>
                  <li>
                    Heightening your self-awareness & emotional intelligence
                  </li>
                  <li>Discovering your unique leadership style</li>
                </ul>
              </div>
            </Grid2>
            <Grid3>
              <div className="grid-cell-1">
                <p className="mb-2 text-black">
                  <strong>Executive coaching</strong> for women is much needed
                  today as women have to battle deep-seated biases on a daily
                  basis. We will work on:
                </p>
                <ul className="ml-8 space-y-1 list-disc">
                  <li>Challenging and stretching your thinking</li>
                  <li>
                    Identifying triggers behind recurring behaviours and
                    emotions
                  </li>
                  <li>
                    Moving forward with clarity of motivation and intention
                  </li>
                  <li>Shifting your insights and perspectives</li>
                  <li>
                    Empowering yourself to lead and live the life dictated by
                    you
                  </li>
                </ul>
              </div>
              <div className="grid-cell-2">
                <LogoMarkReversed />
              </div>
            </Grid3>
            <Grid2>
              <div className="grid-cell-1">
                <LogoMarkReversed />
              </div>
              <div className="grid-cell-2">
                <div className="max-w-md mx-auto md:m-0">
                  <p className="mb-2 text-black">
                    In <strong>career coaching</strong>, we will do a deep dive
                    into:
                  </p>
                  <ul className="ml-8 space-y-1 list-disc">
                    <li>
                      Exploring uncharted territory of your self-limiting
                      thoughts
                    </li>
                    <li>
                      Developing self-belief and overcoming your imposter
                      syndrome
                    </li>
                    <li>Quieting down your inner critic</li>
                    <li>Magnifying your inner champion</li>
                    <li>
                      Leaning in, amplifying your voice and unleashing your
                      untapped potential
                    </li>
                  </ul>
                </div>
              </div>
            </Grid2>
          </div>
        </section>
        <section className="relative overflow-hidden bg-gray-50">
          <div className="relative max-w-md px-4 py-20 mx-auto md:py-32 z-2 md:max-w-3xl md:text-center">
            <h2 className="mb-4 text-heading-dark heading heading--level-2">
              One on One Coaching
            </h2>
            <p className="mb-6 text-text-dark">
              I am known to be impartial, insightful and intuitive, knowing
              exactly when to stretch your thinking. A safe and non-judgmental
              space is held for you explore your challenges, thoughts, fears and
              emotions.
            </p>
            <p className="mb-6 text-text-dark">
              My sincerity and unbiased opinions resonate with many clients and
              I adopt a straightforward approach to coaching and will tell you
              what you need to hear not what you want to hear.
            </p>
            <p className=" mb-14 text-text-dark">
              In order to fully realize the benefits of one on one coaching, one
              is required to show up with an open mind, commitment and most
              importantly a desire to change. The aim is to close the gap
              between your potential and your current state and that happens
              only if there is action and application.
            </p>
            <div className="text-center">
              <LightMode>
                <Button as={Link} size="lg" to="/contact" variant="solid">
                  Free Discovery Session
                </Button>
              </LightMode>
            </div>
          </div>
        </section>
        <section className="text-white bg-brand-green-shaded">
          <div className="md:grid-cols-2 md:grid">
            <div className="hidden md:block">
              <StaticImage
                alt=""
                className="w-full h-full"
                placeholder="none"
                src="../images/woman-on-sofa.jpg"
              />
            </div>

            <div className="max-w-md px-4 py-20 mx-auto md:max-w-3xl md:text-center">
              <h2 className="mb-4 heading heading--level-2">Your Story</h2>
              <p>
                You are an executive, a leader and an emerging leader{' '}
                <span className="whitespace-nowrap">ready to</span>:
              </p>

              <ul className="py-6 space-y-3">
                <li>Develop your executive presence</li>
                <li>Gain clarity of your purpose</li>
                <li>Quiet down your inner critic</li>
                <li>Unleash your untapped potential</li>
                <li>Diminish self-imposed limitations</li>
                <li>Transition into new leadership role</li>
                <li>Empower yourself to break the glass ceiling</li>
                <li>Make a positive impact within your sphere of influence</li>
              </ul>

              <p>but you have no idea where to start</p>
            </div>
          </div>
        </section>
        <section className="relative px-4 py-20 page-width md:py-32 z-2">
          <div className="max-w-md mx-auto md:max-w-3xl md:text-center">
            <h2 className="mb-4 text-heading-dark heading heading--level-2">
              Take That First Step
            </h2>
            <p className="mb-12 text-text-dark">
              Awareness is the start of change. You do not have to walk the
              journey alone, let me be your change champion and ‘sparring’
              partner. When women support women, we accomplish amazing things.
              Let us close the gender bias gap, beginning with you.
            </p>
            <p className="mb-4 text-3xl text-text-dark font-cursive md:text-4xl">
              “We cannot continue doing the same thing and expect different
              results”
            </p>
            <p className="mb-12 font-bold text-text-dark">Otto Perez Molina</p>

            <div className="text-center">
              <LightMode>
                <Button as={Link} size="lg" to="/contact" variant="solid">
                  Find out how we can work together
                </Button>
              </LightMode>
            </div>
          </div>
        </section>
        <section className="relative bg-gray-100">
          <div className="relative px-4 py-20 page-width md:py-32 z-2">
            <h2 className="mb-8 text-center heading heading--level-2">
              News and media
            </h2>
            <div className="w-full aspect-[16/9]">
              <Video url="https://www.youtube.com/watch?v=V7Qrb0cTOpc" />
            </div>
          </div>
        </section>
        <section className="relative px-4 py-20 bg-brand-green">
          <p className="mb-6 text-base font-bold text-center text-white">
            Click image to see original
          </p>
          <div className="relative max-w-lg mx-auto shadow-lg w-fill">
            <a
              href="https://www.weeklysparks.com/ws-people/sophie-chen-provoking-women-succeed"
              rel="noreferrer"
              target="_blank"
            >
              <StaticImage
                alt=""
                className="w-full h-full"
                placeholder="none"
                src="../images/web-article-1.png"
              />
            </a>
          </div>
        </section>
        <section className="relative px-4 py-20 bg-brand-green">
          <p className="mb-6 text-base font-bold text-center text-white">
            Click image to see original
          </p>
          <div className="relative max-w-lg mx-auto shadow-lg w-fill">
            <a
              href="https://e-magazine.cld.bz/sg-MAY-2022/74/"
              rel="noreferrer"
              target="_blank"
            >
              <StaticImage
                alt=""
                className="w-full h-full"
                placeholder="none"
                src="../images/magazine1.png"
              />
            </a>
          </div>
        </section>
      </article>
    </>
  );
}

export default Home;
