import { ParsedQuery } from 'query-string';
import React from 'react';
import { Dialog } from './Dialog';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { NavDrawer } from './NavDrawer';

interface LayoutProps {
  children: React.ReactNode;
  fullPath: string;
  queryStrings: ParsedQuery;
}

function Component(props: LayoutProps) {
  const { children, fullPath, queryStrings } = props;

  const basePath = `/${fullPath.split('/')[1]}`;

  return (
    <div className="relative flex flex-col min-h-screen font-sans">
      <NavBar basePath={basePath} fullPath={fullPath} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Dialog />
      <NavDrawer />
    </div>
  );
}

export const Layout = Component;
