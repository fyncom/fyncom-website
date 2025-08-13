import React from "react"
import { PostHogProvider } from "posthog-js/react"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * Wrap the root element with PostHogProvider for SSR
 */
exports.wrapRootElement = ({ element }) => {
  return element
}
/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

