import React from "react"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import { PostHogProvider } from "posthog-js/react"

// Wrap root element with PostHogProvider
export const wrapRootElement = ({ element }) => {
  return (
    <PostHogProvider
      apiKey={process.env.GATSBY_POSTHOG_API_KEY}
      options={{
        api_host: (typeof window !== "undefined" ? window.location.origin : "") + "/ph",
        defaults: "2025-05-24",
        capture_exceptions: true,
        disable_session_recording: true,
        disable_surveys: true,
        disable_surveys_automatic_display: true,
        debug: process.env.NODE_ENV === "development",
      }}
    >
      {element}
    </PostHogProvider>
  )
}
