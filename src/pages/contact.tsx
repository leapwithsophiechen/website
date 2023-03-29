import { PageSEO } from '@/components';
import { getSEO } from '@/lib/utils';
import { ContactDetails, Form } from '@/page-modules/contact';
import styled from '@emotion/styled';
import { Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import tw from 'twin.macro';

//* Interfaces / types

//* Styled components
const Article = styled.article`
  ${tw``};
  min-height: calc(100vh - 120px);
  background-color: #ffffff;
`;

const ImageContainer = styled.div`
  ${tw`relative object-cover overflow-hidden`};
  height: 360px;
`;

const Grid = styled.div`
  ${tw`grid text-white shadow-lg bg-gray-50 rounded-xl overflow-hidden`}

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

//* Component
function ContactForm(props: PageProps) {
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
        <section className="py-8 page-width sm:py-12">
          <h1 className="text-center mb-8 text-lg font-bold">
            Complete the form below to schedule a complimentary discovery
            session.
          </h1>
          <Grid>
            <div className="flex items-center bg-brand-green md:pb-12">
              <ContactDetails />
            </div>
            <div>
              <Form />
            </div>
          </Grid>
        </section>
      </Article>
    </>
  );
}

export default ContactForm;
