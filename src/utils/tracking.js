const getConsent = () => {
  if (typeof window === "undefined") {
    return null
  }
  return window.__fyncomCookieConsent || null
}

const hasConsent = category => {
  const consent = getConsent()
  return Boolean(consent?.categories?.[category])
}

const loadScriptOnce = (id, src) => {
  if (typeof document === "undefined") {
    return
  }
  if (document.getElementById(id)) {
    return
  }
  const script = document.createElement("script")
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export const loadGoogleAnalytics = () => {
  if (typeof window === "undefined") {
    return
  }
  if (!hasConsent("performance")) {
    return
  }
  const trackingId = process.env.GATSBY_GOOGLE_TAG_ID
  if (!trackingId || window.gtag) {
    return
  }
  if (window.navigator?.doNotTrack === "1" || window.doNotTrack === "1") {
    return
  }
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag("js", new Date())
  window.gtag("config", trackingId, { anonymize_ip: true, send_page_view: false })
  loadScriptOnce("fyncom-gtag", `https://www.googletagmanager.com/gtag/js?id=${trackingId}`)
}

export const disableGoogleAnalytics = () => {
  if (typeof window === "undefined") {
    return
  }
  const trackingId = process.env.GATSBY_GOOGLE_TAG_ID
  if (trackingId) {
    window[`ga-disable-${trackingId}`] = true
  }
}

export const trackGooglePageView = () => {
  if (typeof window === "undefined") {
    return
  }
  const trackingId = process.env.GATSBY_GOOGLE_TAG_ID
  if (!hasConsent("performance") || !trackingId || !window.gtag || window[`ga-disable-${trackingId}`]) {
    return
  }
  const pagePath = window.location.pathname + window.location.search + window.location.hash
  window.gtag("event", "page_view", { page_path: pagePath })
}

export const trackGoogleEvent = (action, params) => {
  if (typeof window === "undefined") {
    return
  }
  if (!hasConsent("performance") || !window.gtag) {
    return
  }
  window.gtag("event", action, params)
}

export const loadFacebookPixel = () => {
  if (typeof window === "undefined") {
    return
  }
  if (!hasConsent("marketing")) {
    return
  }
  const pixelId = process.env.GATSBY_FACEBOOK_PIXEL
  if (!pixelId || window.fbq) {
    return
  }
  window.fbq = function () {
    window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments)
  }
  window.fbq.queue = []
  window.fbq.loaded = true
  window.fbq.version = "2.0"
  window._fbq = window.fbq
  loadScriptOnce("fyncom-fb-pixel", "https://connect.facebook.net/en_US/fbevents.js")
  window.fbq("init", pixelId)
  window.fbq("consent", "grant")
  window.__fbqConsentRevoked = false
}

export const disableFacebookPixel = () => {
  if (typeof window === "undefined") {
    return
  }
  window.__fbqConsentRevoked = true
  if (typeof window.fbq === "function") {
    window.fbq("consent", "revoke")
  }
}

export const trackFacebookPageView = () => {
  if (typeof window === "undefined") {
    return
  }
  if (!hasConsent("marketing") || window.__fbqConsentRevoked || typeof window.fbq !== "function") {
    return
  }
  window.fbq("track", "PageView")
}
