import styled from '@emotion/styled';
import tw from 'twin.macro';

export const StyleProvider = styled.div`
  ${tw`text-base`};

  h2,
  h3 {
    ${tw`mb-4 font-serif font-black duration-300`};
    font-family: 'Frank Ruhl Libre', serif;
  }

  h2 {
    ${tw`text-2xl md:text-3xl `};
  }

  p {
    ${tw`mb-4 leading-7`};
  }

  ul {
    ${tw`mb-4 list-disc list-inside`};
    li {
      ${tw`mb-3`};

      ul {
        ${tw`mt-3 ml-4`}
      }
    }
  }

  a {
    ${tw`relative no-underline duration-300 border-b border-brand-pink opacity-80 hover:opacity-100`}
    font-weight: 700;
  }

  blockquote {
    ${tw`relative pl-8`};
    > div {
      ${tw`absolute left-0 w-2 h-full bg-brand-pink`}
    }
  }

  address {
    ${tw`not-italic font-bold leading-8`};
  }

  .block {
    ${tw`mb-8`};
    break-inside: avoid;
  }
`;
