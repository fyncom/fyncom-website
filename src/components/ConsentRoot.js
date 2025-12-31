import React, { useEffect } from "react"
import { PostHogProvider } from "posthog-js/react"
import posthog from "posthog-js"
import { CookieBanner, CookieConsentProvider, CookiePreferencesModal, useCookieConsent } from "./CookieConsent"
import { disableFacebookPixel, disableGoogleAnalytics, loadFacebookPixel, loadGoogleAnalytics, trackGooglePageView } from "../utils/tracking"

const PostHogGate = ({ element }) => {
  const { preferences } = useCookieConsent()
  const allowPerformance = preferences?.categories?.performance

  if (!allowPerformance) {
    return element
  }

  return (
    <PostHogProvider
      apiKey={process.env.GATSBY_POSTHOG_API_KEY}
      options={{
        api_host: (typeof window !== "undefined" ? window.location.origin : "") + "/ph",
        defaults: "2025-05-24",
        capture_exceptions: true,
        disable_session_recording: false,
        disable_surveys: true,
        disable_surveys_automatic_display: true,
        debug: process.env.NODE_ENV === "development",
      }}
    >
      {element}
    </PostHogProvider>
  )
}

const ConsentEffects = () => {
  const { preferences } = useCookieConsent()

  useEffect(() => {
    if (!preferences) {
      return
    }

    if (preferences.categories?.performance) {
      loadGoogleAnalytics()
      trackGooglePageView()
      posthog.opt_in_capturing?.()
    } else {
      disableGoogleAnalytics()
      posthog.opt_out_capturing?.()
    }

    if (preferences.categories?.marketing) {
      loadFacebookPixel()
    } else {
      disableFacebookPixel()
    }
  }, [preferences])

  return null
}

const ConsentRoot = ({ element }) => (
  <CookieConsentProvider>
    <ConsentEffects />
    <PostHogGate element={element} />
    <CookieBanner />
    <CookiePreferencesModal />
  </CookieConsentProvider>
)

export default ConsentRoot
