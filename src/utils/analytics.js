import { trackGoogleEvent, trackGooglePageView } from "./tracking"

// Log page views
export const logPageView = () => {
  trackGooglePageView()
}

// Event tracking
export const logEvent = (category, action, label) => {
  trackGoogleEvent(action, {
    event_category: category,
    event_label: label,
  })
}
