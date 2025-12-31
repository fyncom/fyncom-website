import React from "react"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import ConsentRoot from "./src/components/ConsentRoot"
import { logPageView } from "./src/utils/analytics"
import { trackFacebookPageView } from "./src/utils/tracking"

// Track page views after consent is granted
export const onRouteUpdate = () => {
  if (typeof window !== "undefined") {
    logPageView()
    trackFacebookPageView()
  }
}

// Wrap root element with consent + analytics providers
export const wrapRootElement = ConsentRoot
