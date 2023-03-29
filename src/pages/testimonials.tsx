/* eslint-disable react/jsx-props-no-spreading */
import { PageSEO } from '@/components';
import { getSEO } from '@/lib/utils';
// import * as Cards from '@/page-modules/testimonials';
import { Card, data } from '@/page-modules/testimonials';
import styled from '@emotion/styled';
import { graphql, Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Slider from 'react-slick';
import tw from 'twin.macro';

//* Styled components
const Article = styled.article`
  ${tw`bg-light-bg`};
`;

//* Component
function Testimonials(props: PageProps) {
  //
  //* Destructure props
  const { location } = props;
  const { pathname } = location;

  const seo = getSEO(pathname);

  const Container = styled.div`
    ${tw`relative w-full max-w-4xl pb-20 mx-auto bg-white md:px-10`};

    .slick-dots {
      ${tw`absolute p-0 text-center list-none transform -translate-x-1/2 -bottom-20 left-1/2`};
      li {
        ${tw`inline-block`}
      }

      button {
        ${tw`w-3 h-3 p-0 mx-1 text-transparent bg-transparent border border-gray-700 rounded-full`}
      }
      .slick-active {
        button {
          ${tw`bg-gray-700`}
        }
      }
    }

    .slick-arrow {
      font-size: 0;
      ${tw`absolute w-8 h-8 p-0 transform -translate-y-1/2 border-none cursor-pointer top-1/2 z-1 bg-none`}
    }

    .slick-prev {
      ${tw`left-0 z-2`}
    }

    .slick-next {
      ${tw`right-0`}
    }

    .slick-prev:before {
      content: '❮';
      border-bottom-left-radius: 4rem;
      border-top-left-radius: 4rem;
      justify-content: flex-end;
      padding-right: 0.35rem;
    }

    .slick-next::before {
      content: '❯';
      border-bottom-right-radius: 4rem;
      border-top-right-radius: 4rem;
      padding-left: 0.35rem;
    }

    .slick-next:before,
    .slick-prev:before {
      ${tw`absolute left-0 items-center hidden w-8 h-16 text-2xl text-black duration-200 bg-white sm:flex dark:text-black dark:bg-white -top-1`}
    }

    .slick-prev:hover:before,
    .slick-next:hover:before {
      opacity: 1;
    }
  `;

  //* Constants
  const sliderOptions = {
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

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
          <h1 className="mb-12 text-center heading heading--level-2">
            Testimonials
          </h1>
          <Container>
            <Slider {...sliderOptions}>
              {data.map((item) => (
                <Card
                  key={item.name}
                  bio={item.bio}
                  gender={item.gender}
                  image={item.imgUrl}
                  name={item.name}
                  text={item.text}
                />
              ))}
            </Slider>
          </Container>
        </section>
      </Article>
    </>
  );
}

export default Testimonials;
