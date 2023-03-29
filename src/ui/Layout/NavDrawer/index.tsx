import { RootState } from '@/store';
import { setNavDrawerState as setNavDrawerStateAction } from '@/store/ui';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { connect } from 'react-redux';
import tw from 'twin.macro';
import { CloseIcon } from './CloseIcon';

interface NavDrawerProps {
  isShowNavDrawer: RootState['ui']['isShowNavDrawer'];
  setNavDrawerState: typeof setNavDrawerStateAction;
}

const Component = (props: NavDrawerProps) => {
  //
  const { isShowNavDrawer, setNavDrawerState } = props;

  const handleCloseDrawer = () => {
    setNavDrawerState(false);
  };

  return (
    <Drawer
      isOpen={isShowNavDrawer}
      placement="right"
      onClose={handleCloseDrawer}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <button onClick={handleCloseDrawer}>
            <CloseIcon />
          </button>
        </DrawerHeader>
        <DrawerBody>
          <ul className="pt-4 mb-8 space-y-6 font-sans text-center text-black">
            <li>
              <Link to="/" onClick={handleCloseDrawer}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/my-story" onClick={handleCloseDrawer}>
                My Story
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={handleCloseDrawer}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleCloseDrawer}>
                Contact
              </Link>
            </li>
          </ul>
        </DrawerBody>
        {/* <DrawerFooter>Footer</DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

const states = (state: RootState) => ({
  isShowNavDrawer: state.ui.isShowNavDrawer,
});

const dispatch = {
  setNavDrawerState: setNavDrawerStateAction,
};

export const NavDrawer = connect(states, dispatch)(Component);
