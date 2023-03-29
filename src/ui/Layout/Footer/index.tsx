import { graphql, /*Link, */ PageProps } from 'gatsby';
//* Use gatsby Link if i18n is required
import { Link } from 'gatsby';
import React from 'react';

function Component() {
  return (
    <footer className="py-6 text-white bg-gray-900 md:py-8">
      <div className="items-center justify-between text-center md:flex page-width">
        <div className="pb-4 text-sm text-gray-300 md:pb-0">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="space-y-4 md:space-x-8 md:flex md:space-y-0">
          <div>
            <Link to="/legal/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <Link to="/legal/terms-of-use">Terms of Use</Link>
          </div>
          <div>
            <Link to="/legal/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = Component;
