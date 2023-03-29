/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/iframe-has-title */
export { wrapRootElement } from './src/lib/providers/wrap-root-element';
export { wrapPageElement } from './src/lib/providers/wrap-page-element';

export const onRenderBody = ({
  setBodyAttributes,
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setBodyAttributes({
    className: 'relative',
  });
  // setHeadComponents([
  //   <script
  //     dangerouslySetInnerHTML={{
  //       __html: `
  //     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  //     })(window,document,'script','dataLayer', '${process.env.GATSBY_GTM_ID}');
  //     `,
  //     }}
  //     key="gtm_head"
  //   />,
  // ]);
  // setPreBodyComponents([
  //   <noscript
  //     dangerouslySetInnerHTML={{
  //       __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${process.env.GATSBY_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
  //     }}
  //     key="gtm_body"
  //   />,
  // ]);
};
