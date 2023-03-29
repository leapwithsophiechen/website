import { useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';
import { DarkModeIcon } from './DarkModeIcon';
import { LightModeIcon } from './LightModeIcon';

//* Interface / types
interface ModeSelectorProps {
  isReversed?: boolean;
  permSurface?: 'dark' | 'light' | undefined;
}

//* Styled Component
const Container = styled.span<ModeSelectorProps>`
  button {
    ${(props) => {
      if (!props.permSurface) {
        if (!props.isReversed) {
          return tw`text-black dark:text-white`;
        }
        if (props.isReversed) {
          return tw`text-white dark:text-black`;
        }
      }
      if (props.permSurface === 'dark' && !props.isReversed) {
        return tw`text-white dark:text-white`;
      }
      if (props.permSurface === 'light' && !props.isReversed) {
        return tw`text-black dark:text-black`;
      }
    }}

    ${tw`flex items-center p-0 m-0`}
  }
`;

//* Component
function Component(props: ModeSelectorProps) {
  //
  //* Destructured Props
  const { isReversed = false, permSurface = undefined } = props;

  const { colorMode, toggleColorMode } = useColorMode();

  const handleColorMode = (mode: string) => {
    //
    if (mode === 'light') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }

    toggleColorMode();
  };

  return (
    <Container isReversed={isReversed} permSurface={permSurface}>
      <button onClick={() => handleColorMode(colorMode)}>
        {colorMode === 'light' ? (
          <DarkModeIcon className="w-5 h-5" />
        ) : (
          <LightModeIcon className="w-5 h-5" />
        )}
      </button>
    </Container>
  );
}

export const ModeSelector = Component;

export const setInitialColorMode = () => {
  const colorMode = localStorage.getItem('chakra-ui-color-mode');

  if (!colorMode) {
    document.documentElement.style.setProperty(
      '--chakra-ui-color-mode',
      'light'
    );
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.add('light');
    localStorage.setItem('chakra-ui-color-mode', 'light');
  }

  if (colorMode === 'dark') {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }

  if (colorMode === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
};
