import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import tw from 'twin.macro';
import { FemaleAvatar } from './FemaleAvatar';
import { MaleAvatar } from './MaleAvatar';

interface Props {
  bio: string;
  gender: 'f' | 'm';
  image?: string;
  name: string;
  text: string;
}

const styles = {
  hide: tw`translate-y-8 opacity-0`,
  show: tw`opacity-100`,
};

//* Component
function Component(props: Props) {
  //
  //* Destructure props
  const { bio, gender, image, name, text } = props;

  //* States
  const [isShow, setIsShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [retries, setRetries] = useState(0);

  //* Functions
  const handleImageError = () => {
    setIsError(true);
    if (retries < 2) {
      setTimeout(() => {
        setIsError(false);
        setRetries((prev) => prev + 1);
      }, 2000);
    }
  };

  //* Markup
  return (
    <VisibilitySensor
      delayedCall
      partialVisibility
      offset={{ top: 95 }}
      onChange={(isVisible) => {
        if (isVisible) {
          setIsShow(true);
        }
      }}
    >
      <div
        className="p-4 mb-8 text-gray-800 transition duration-500 ease-in-out bg-white rounded-lg filter drop-shadow-lg dark:bg-gray-800 sm:px-10 sm:pb-12 dark:text-white break-inside-avoid"
        css={isShow ? [styles.show] : [styles.hide]}
      >
        <blockquote className="flex flex-col mt-8">
          <div className="relative flex-grow text-lg font-medium leading-7">
            <svg
              className="absolute top-0 left-0 w-8 h-8 transform -translate-x-6 -translate-y-8 text-brand-pink"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">{text}</p>
          </div>
          <footer className="mt-8">
            <div className="sm:flex">
              <div className="w-16">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  {(isError || !image) && gender === 'f' && (
                    <FemaleAvatar className="w-16 h-16" />
                  )}
                  {(isError || !image) && gender === 'm' && (
                    <MaleAvatar className="w-16 h-16" />
                  )}
                  {!isError && (
                    <img alt={name} src={image} onError={handleImageError} />
                  )}
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6">
                <div className="text-base font-bold leading-6 text-black dark:text-white">
                  {name}
                </div>
                <div className="text-sm font-medium text-gray-800 dark:text-indigo-200">
                  {bio}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </VisibilitySensor>
  );
}

export const Card = Component;
