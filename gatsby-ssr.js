const React = require("react")
const ConsentRoot = require("./src/components/ConsentRoot").default

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * Wrap the root element with consent + analytics providers for SSR
 */
exports.wrapRootElement = ConsentRoot
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
