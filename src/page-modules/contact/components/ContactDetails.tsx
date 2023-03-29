import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  WhatsAppIcom,
} from '@/components';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import tw from 'twin.macro';

//* Interfaces / types

//* Styled components
const ImageContainer = styled.div`
  ${tw`relative overflow-hidden rounded-full`};
  height: 80px;
  width: 80px;
`;

//* Component
function Component() {
  //
  //* Destructured props

  //* Markup
  return (
    <div className="w-full max-w-sm px-2 py-12 mx-auto text-center text-white xs:px-4">
      <h1 className="mb-8 heading heading--level-2">Get in touch</h1>
      <div className="flex justify-center mb-8">
        {/* <div className="mr-8">
          <ImageContainer>
            <StaticImage
              alt=""
              className="w-full h-full"
              src="../../../images/profile-sm.jpg"
            />
          </ImageContainer>
        </div> */}
        <div className="flex items-center justify-center">
          <div>
            <a
              aria-label="linkedIn"
              href="https://www.linkedin.com/in/sophiechencoach/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon className="w-8 h-8 mr-8" />
            </a>
          </div>
          <div>
            <a
              aria-label="instagram"
              href="https://www.instagram.com/leapwithsophiechen/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-lg text-center">
        <div>
          <EmailIcon className="w-8 h-8" />
        </div>
        <div className="mb-12">
          <a
            aria-label="twitter"
            className="anchor"
            href="mailto:sophie@leapwithsophiechen.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            sophie@leapwithsophiechen.com
          </a>
        </div>
        <div className="flex mb-2">
          <div className="mr-4">
            <a href={`https://wa.me/6597209648`}>
              <WhatsAppIcom className="w-8 h-8" />
            </a>
          </div>
          <div>
            <a
              aria-label="twitter"
              className="anchor"
              href="tel:+6597209648"
              rel="noopener noreferrer"
            >
              <PhoneIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div>
          <a
            aria-label="twitter"
            className="anchor"
            href="tel:+6597209648"
            rel="noopener noreferrer"
          >
            +65 9720 9648
          </a>
        </div>
      </div>
    </div>
  );
}

export const ContactDetails = Component;
