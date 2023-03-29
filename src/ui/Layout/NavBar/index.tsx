import { InstagramIcon, LinkedInIcon, LogoTypeSingleLine } from '@/components';
import { setNavDrawerState as setNavDrawerStateAction } from '@/store/ui';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { connect } from 'react-redux';
import tw from 'twin.macro';
import { CustomLink } from './CustomLink';
import { debounce } from './debounce';
import { NavDrawerIcon } from './NavDrawerIcon';

//* Interfaces / types
interface NavBarProps {
  basePath: string;
  fullPath: string;
  setNavDrawerState: typeof setNavDrawerStateAction;
}

interface HeaderProps {
  isAwayFromTop: boolean;
  isHome: boolean;
}

const Header = styled.header<HeaderProps>`
  ${tw`sticky z-10 w-full`};
  transition: top 0.3s ease-in-out;

  top: -100px;

  height: 63px;
  @media (min-width: 576px) {
    height: 88px;
    /* height: 50px; */
  }
  @media (min-width: 992px) {
    height: 96px;
    /* height: 62px; */
  }

  ${(props) => {
    if (props.isHome && !props.isAwayFromTop) {
      return tw`text-white bg-brand-green`;
    }

    if (props.isHome && props.isAwayFromTop) {
      return tw`top-0 text-black bg-white shadow-md`;
    }

    if (!props.isHome) {
      return tw`top-0 text-black bg-white shadow-md`;
    }
  }};
`;

const Banner = styled.div`
  ${tw`hidden py-3 text-sm font-bold text-center text-black bg-white border-b border-gray-300`};

  @media (min-width: 576px) {
    ${tw`block`};
  }
`;

const Nav = styled.nav`
  ${tw`relative w-full h-full`};
`;

const MainNav = styled.nav`
  ${tw`relative flex items-center justify-between w-full h-full px-4 py-2 mx-auto sm:px-6 lg:px-12`};

  @media (min-width: 576px) {
    ${tw`h-auto`};
  }

  @media (min-width: 992px) {
    ${tw`py-4`};
  }
`;

function Component(props: NavBarProps) {
  //
  //* Destructured props
  const { basePath, fullPath, setNavDrawerState } = props;

  //* States
  const [isAwayFromTop, setIsAwayFromTop] = React.useState(false);

  //* Functions
  const handleScroll = debounce(() => {
    setIsAwayFromTop(window.pageYOffset > 120);
  }, 100);

  //* Effects
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAwayFromTop, handleScroll]);

  return (
    <Header isAwayFromTop={isAwayFromTop} isHome={fullPath === '/'}>
      <Nav>
        <Banner>
          <a href="https://training.leapwithsophiechen.com/guide">
            Download the Ultimate Guide to Creating Purpose
          </a>
        </Banner>
        <MainNav>
          <div className="text-lg font-thin">
            <Link to="/">
              <LogoTypeSingleLine className="h-3" />
            </Link>
          </div>
          <div className="items-center hidden space-x-9 md:flex">
            <div>
              <CustomLink
                basePath={basePath}
                isAwayFromTop={isAwayFromTop}
                isHome={fullPath === '/'}
                label="My Story"
                primaryPath="/my-story"
              />
            </div>
            <div>
              <CustomLink
                basePath={basePath}
                isAwayFromTop={isAwayFromTop}
                isHome={fullPath === '/'}
                label="Testimonials"
                primaryPath="/testimonials"
              />
            </div>
            <div>
              <CustomLink
                basePath={basePath}
                isAwayFromTop={isAwayFromTop}
                isHome={fullPath === '/'}
                label="Contact"
                primaryPath="/contact"
              />
            </div>
            <div className="flex">
              <div className="mr-4">
                <a
                  aria-label="linkedIn"
                  href="https://www.linkedin.com/in/sophiechencoach/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </a>
              </div>
              <div>
                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/leapwithsophiechen/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-8 md:hidden">
            <button onClick={() => setNavDrawerState(true)}>
              <NavDrawerIcon className="w-7 h-7" />
            </button>
          </div>
        </MainNav>
      </Nav>
    </Header>
  );
}

const dispatch = {
  setNavDrawerState: setNavDrawerStateAction,
};

export const NavBar = connect(null, dispatch)(Component);
