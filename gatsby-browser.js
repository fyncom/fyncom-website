/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import { initGA, logPageView } from "./src/utils/analytics"

// Initialize Google Analytics
export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    initGA(process.env.GATSBY_GOOGLE_TAG_ID)
  }
}

// Track page views
export const onRouteUpdate = () => {
  if (typeof window !== "undefined") {
    logPageView()
  }
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm("This website has been updated. Would you like to reload to display the latest version?")

  if (answer === true) {
    window.location.reload()
  }
}

// You can delete this file if you're not using it
