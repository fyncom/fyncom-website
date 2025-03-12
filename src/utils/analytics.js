import ReactGA from "react-ga"

// Initialize Google Analytics
export const initGA = trackingId => {
  if (trackingId && typeof window !== "undefined") {
    ReactGA.initialize(trackingId)
  }
}

// Log page views
export const logPageView = () => {
  if (typeof window !== "undefined") {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}

// Event tracking
export const logEvent = (category, action, label) => {
  if (typeof window !== "undefined") {
    ReactGA.event({
      category,
      action,
      label,
    })
  }
}
