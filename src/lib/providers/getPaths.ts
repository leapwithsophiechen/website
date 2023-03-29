interface GetBasePathNameInput {
  pageContext: Record<any, any>;
  uri: string;
}
export const getPaths = (props: GetBasePathNameInput) => {
  //
  const { pageContext, uri } = props;
  const { i18n } = pageContext;

  if (i18n) {
    const path = i18n.originalPath;
    return {
      basePath: `/${path.split('/')[1]}`,
      fullPath: path,
    };
  }

  return {
    basePath: `/${uri.split('/')[1]}`,
    fullPath: uri,
  };
};
