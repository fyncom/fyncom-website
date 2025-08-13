import React from "react"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import { initGA, logPageView } from "./src/utils/analytics"
import { PostHogProvider } from "posthog-js/react"

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

// Wrap root element with PostHogProvider
export const wrapRootElement = ({ element }) => {
  return (
    <PostHogProvider
      apiKey={process.env.GATSBY_POSTHOG_API_KEY}
      options={{
        api_host: (typeof window !== "undefined" ? window.location.origin : "") + "/ph",
        defaults: "2025-05-24",
        capture_exceptions: true,
        debug: process.env.NODE_ENV === "development",
      }}
    >
      {element}
    </PostHogProvider>
  )
}
