const canUseGtag = () => typeof window !== "undefined" && typeof window.gtag === "function"

// Initialize Google Analytics (gtag handles config when available).
export const initGA = trackingId => {
  if (trackingId && canUseGtag()) {
    window.gtag("config", trackingId)
  }
}

// Log page views
export const logPageView = () => {
  if (canUseGtag()) {
    window.gtag("event", "page_view", { page_path: window.location.pathname })
  }
}

// Event tracking
export const logEvent = (category, action, label) => {
  if (canUseGtag()) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    })
  }
}
