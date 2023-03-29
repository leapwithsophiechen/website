import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import React from 'react';
import tw from 'twin.macro';

//* Interfaces / types
interface LinkProps {
  basePath: string;
  isAwayFromTop: boolean;
  isHome: boolean;
  label: string;
  primaryPath: string;
}

interface ContainerProps {
  isAwayFromTop: boolean;
  isBasePathActive: boolean;
  isHome: boolean;
}

//* Styled components
const Container = styled.span<ContainerProps>`
  a {
    ${tw`relative font-sans duration-300`};

    font-size: 15px;
    font-weight: 700;

    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: -4px;
      left: 0;
      ${(props) => {
        if (props.isHome && props.isAwayFromTop) {
          return props.isBasePathActive
            ? tw`bg-brand-pink`
            : tw`bg-transparent`;
        }
        if (props.isHome && !props.isAwayFromTop) {
          return props.isBasePathActive ? tw`bg-white` : tw`bg-transparent`;
        }
        if (!props.isHome) {
          return props.isBasePathActive
            ? tw`bg-brand-pink`
            : tw`bg-transparent`;
        }
      }}
    }
  }

  ${(props) => {
    if (props.isHome && !props.isAwayFromTop) {
      return tw`text-gray-200 hover:text-white`;
    }
    return tw`text-gray-600 hover:text-heading-dark`;
  }}
`;

//* Component
function Component(props: LinkProps) {
  //
  //* Destructure props
  const { basePath, isAwayFromTop, isHome, label, primaryPath } = props;

  //* Markup
  return (
    <Container
      isAwayFromTop={isAwayFromTop}
      isBasePathActive={primaryPath === basePath}
      isHome={isHome}
    >
      <Link to={primaryPath}>{label}</Link>
    </Container>
  );
}
export const CustomLink = Component;
