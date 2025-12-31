import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import "./cookie-consent.css"

const STORAGE_KEY = "fyncom-cookie-preferences"
const CONSENT_VERSION = 1

const defaultPreferences = {
  version: CONSENT_VERSION,
  updatedAt: null,
  categories: {
    necessary: true,
    functional: false,
    performance: false,
    marketing: false,
  },
}

const CookieConsentContext = createContext(null)

const mergePreferences = stored => {
  if (!stored || typeof stored !== "object") {
    return null
  }
  return {
    ...defaultPreferences,
    ...stored,
    categories: {
      ...defaultPreferences.categories,
      ...(stored.categories || {}),
    },
  }
}

export const CookieConsentProvider = ({ children }) => {
  const [preferences, setPreferences] = useState(null)
  const [isReady, setIsReady] = useState(false)
  const [isBannerOpen, setBannerOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setPreferences(mergePreferences(parsed))
      } catch (error) {
        setPreferences(null)
      }
    }
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!isReady || typeof window === "undefined") {
      return
    }
    window.__fyncomCookieConsent = preferences
    if (!preferences) {
      setBannerOpen(true)
    }
  }, [isReady, preferences])

  const savePreferences = nextPreferences => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences))
    }
    setPreferences(nextPreferences)
    setBannerOpen(false)
    setModalOpen(false)
  }

  const acceptAll = () =>
    savePreferences({
      ...defaultPreferences,
      updatedAt: new Date().toISOString(),
      categories: {
        necessary: true,
        functional: true,
        performance: true,
        marketing: true,
      },
    })

  const rejectAll = () =>
    savePreferences({
      ...defaultPreferences,
      updatedAt: new Date().toISOString(),
      categories: {
        necessary: true,
        functional: false,
        performance: false,
        marketing: false,
      },
    })

  const openPreferences = () => setModalOpen(true)
  const closePreferences = () => setModalOpen(false)

  const value = useMemo(
    () => ({
      preferences,
      isReady,
      isBannerOpen,
      isModalOpen,
      savePreferences,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectAll,
    }),
    [preferences, isReady, isBannerOpen, isModalOpen]
  )

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider")
  }
  return context
}

export const CookieBanner = () => {
  const { isReady, isBannerOpen, acceptAll, rejectAll, openPreferences } = useCookieConsent()

  if (!isReady || !isBannerOpen) {
    return null
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__copy">
          <strong>We respect your privacy.</strong> We use cookies to keep the site working, remember preferences, measure performance, and support marketing
          insights. Choose what’s ok.
        </div>
        <div className="cookie-banner__actions">
          <button className="cookie-button secondary" type="button" onClick={rejectAll}>
            Reject all
          </button>
          <button className="cookie-button ghost" type="button" onClick={openPreferences}>
            Customize
          </button>
          <button className="cookie-button primary" type="button" onClick={acceptAll}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}

export const CookiePreferencesModal = () => {
  const { preferences, isModalOpen, closePreferences, savePreferences } = useCookieConsent()
  const initial = preferences || defaultPreferences
  const [draft, setDraft] = useState(initial.categories)

  useEffect(() => {
    if (isModalOpen) {
      setDraft(initial.categories)
    }
  }, [isModalOpen, initial.categories])

  if (!isModalOpen) {
    return null
  }

  const handleToggle = key => {
    setDraft(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSave = () =>
    savePreferences({
      ...defaultPreferences,
      updatedAt: new Date().toISOString(),
      categories: {
        ...defaultPreferences.categories,
        ...draft,
        necessary: true,
      },
    })

  return (
    <div className="cookie-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title">
      <div className="cookie-modal">
        <div className="cookie-modal__header">
          <h2 id="cookie-preferences-title">Cookie preferences</h2>
          <button className="cookie-button ghost" type="button" onClick={closePreferences}>
            Close
          </button>
        </div>
        <p className="cookie-modal__description">
          Choose which cookie categories you want to allow. Necessary cookies keep the site running and can’t be turned off.
        </p>
        <div className="cookie-toggle">
          <div>
            <strong>Necessary</strong>
            <p>Required for core site functionality and security.</p>
          </div>
          <input type="checkbox" checked readOnly disabled aria-label="Necessary cookies enabled" />
        </div>
        <div className="cookie-toggle">
          <div>
            <strong>Functional</strong>
            <p>Remember your preferences and help you return to your account faster.</p>
          </div>
          <input type="checkbox" checked={draft.functional} onChange={() => handleToggle("functional")} aria-label="Functional cookies" />
        </div>
        <div className="cookie-toggle">
          <div>
            <strong>Performance</strong>
            <p>Understand site usage and enable session replay for troubleshooting.</p>
          </div>
          <input type="checkbox" checked={draft.performance} onChange={() => handleToggle("performance")} aria-label="Performance cookies" />
        </div>
        <div className="cookie-toggle">
          <div>
            <strong>Marketing</strong>
            <p>Measure campaign effectiveness and understand repeat visits.</p>
          </div>
          <input type="checkbox" checked={draft.marketing} onChange={() => handleToggle("marketing")} aria-label="Marketing cookies" />
        </div>
        <div className="cookie-modal__actions">
          <button className="cookie-button secondary" type="button" onClick={closePreferences}>
            Cancel
          </button>
          <button className="cookie-button primary" type="button" onClick={handleSave}>
            Save preferences
          </button>
        </div>
      </div>
    </div>
  )
}
