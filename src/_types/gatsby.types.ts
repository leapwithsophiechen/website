export interface WrapPageElement {
  element: React.ReactNode;
  props: {
    data: Record<any, any>;
    location: {
      ancestorOrigins: Record<any, any>;
      hash: string;
      host: string;
      hostname: string;
      href: string;
      key: string;
      origin: string;
      pathname: string;
      port: string;
      protocol: string;
      search: string;
      state: null | Record<any, any>;
    };
    pageContext: Record<any, any>;
    pageResources: Record<any, any>;
    path: string;
    uri: string;
  };
}
