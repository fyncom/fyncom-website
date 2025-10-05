import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { logEvent } from "../utils/analytics"

// Import the three variant components
import MakeADepositV1 from "./make-a-deposit-v1"
import MakeADepositV2 from "./make-a-deposit-v2"
import MakeADepositV3 from "./make-a-deposit-v3"

/**
 * MakeADeposit - A/B/C Test Router
 *
 * This component routes users to one of three design variants based on their depositId.
 * The same depositId will always see the same variant for consistency.
 *
 * Variants:
 * - A: Original design (make-a-deposit-v1.js) - Current production design
 * - B: UX-focused redesign (make-a-deposit-v2.js) - Modern card layout with FAQ
 * - C: Premium design (make-a-deposit-v3.js) - From makeADeposit-Codex-nice branch
 */

const MakeADeposit = () => {
  const location = useLocation()
  const [variant, setVariant] = useState(null)

  // Simple hash function to consistently assign variant based on depositId
  const getVariantFromDepositId = (depositId) => {
    if (!depositId) return 'A' // default variant for no depositId

    // Simple hash: sum character codes
    let hash = 0
    for (let i = 0; i < depositId.length; i++) {
      hash = ((hash << 5) - hash) + depositId.charCodeAt(i)
      hash = hash & hash // Convert to 32-bit integer
    }

    // Map to variant A, B, or C
    const variantIndex = Math.abs(hash) % 3
    const variants = ['A', 'B', 'C']
    return variants[variantIndex]
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const blockedEmailId = searchParams.get("depositId")

    // Determine variant based on depositId
    const assignedVariant = getVariantFromDepositId(blockedEmailId)
    setVariant(assignedVariant)
    console.log("Assigned variant:", assignedVariant, "for depositId:", blockedEmailId)

    // Log variant assignment for analytics
    logEvent("AB Test", "Variant Assigned", assignedVariant)
  }, [location])

  // Show nothing until variant is determined
  if (!variant) {
    return null
  }

  // Render the appropriate variant
  if (variant === 'A') {
    return <MakeADepositV1 />
  } else if (variant === 'B') {
    return <MakeADepositV2 />
  } else {
    return <MakeADepositV3 />
  }
}

export default MakeADeposit
