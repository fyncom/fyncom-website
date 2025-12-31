import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

export const useCombinedQuery = () => {
  const data = useStaticQuery(graphql`
    query CombinedStaticQuery {
      fyncomFilterGmail: file(relativePath: { eq: "fyncom_filters_gmail_edition_no_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [44, 88, 132, 176, 220, 264, 300])
        }
      }
      fyncomFilterGmailDark: file(relativePath: { eq: "fyncom_filters_gmail_edition_no_logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [44, 88, 132, 176, 220, 264, 300])
        }
      }
      increaseResponseRates: file(relativePath: { eq: "increase-response=rates-across-any platform-and-channel.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      tinderLogo: file(relativePath: { eq: "logos/tinder-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 320, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [96, 160, 240, 320])
        }
      }
      discordLogo: file(relativePath: { eq: "logos/Discord-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [44, 88, 132, 176, 220, 264, 300])
        }
      }
      telegramLogo: file(relativePath: { eq: "logos/telegram-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 135, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [48, 72, 96, 120, 135])
        }
      }
      appStoreBadge: file(relativePath: { eq: "apple-en.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      googlePlayBadge: file(relativePath: { eq: "google-play-en.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      teamMeeting: file(relativePath: { eq: "team-meeting.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 486, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      innovation: file(relativePath: { eq: "icons/innovation.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      collaboration: file(relativePath: { eq: "icons/collaboration.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      transparency: file(relativePath: { eq: "icons/transparency.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      customerFocus: file(relativePath: { eq: "icons/customer-focus.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      continuousImprovement: file(relativePath: { eq: "icons/continuous-improvement.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 150, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      fyncomFiltersWords: file(relativePath: { eq: "fyncom-filters-black.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      fyncomFiltersWordsDark: file(relativePath: { eq: "fyncom-filters-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      heroImageFilter: file(relativePath: { eq: "email-filter-gmail.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      emailFilterFyncom: file(relativePath: { eq: "email-filter-fyncom.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      getPaidToBlockSpamEmails: file(relativePath: { eq: "get-paid-to-block-spam-emails.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      cleanInboxCleanMind: file(relativePath: { eq: "a-clean-inbox-and-a-focused-mind.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      sendgrid: file(relativePath: { eq: "logos/SG_Twilio_Lockup_RGBx1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      slicktext: file(relativePath: { eq: "logos/SlickText_Logo-Transparent.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      zapier: file(relativePath: { eq: "logos/2560px-Zapier_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      handshake: file(relativePath: { eq: "illustrations/handshake.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1000, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      collaborate: file(relativePath: { eq: "illustrations/collaborating-with-others.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      effectiveSpend: file(relativePath: { eq: "illustrations/create-efficient-costs.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      integrations: file(relativePath: { eq: "illustrations/integrate-with-emails-and-more.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      salesHeroImage: file(relativePath: { eq: "illustrations/sales-phone-calls.png" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      increaseBookings: file(relativePath: { eq: "illustrations/increase-bookings.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      accelerateDeals: file(relativePath: { eq: "illustrations/deal-acceleration-charts.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      minMax: file(relativePath: { eq: "illustrations/min-max-gift-rewards-value-mobile.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      customerHeroImage: file(relativePath: { eq: "illustrations/marketing-mobile-survey.png" }) {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      seamlessIntegrations: file(relativePath: { eq: "illustrations/seamless-integrations-comfy.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      loyalCustomers: file(relativePath: { eq: "illustrations/identifying-loyal-customers.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      driveAdoption: file(relativePath: { eq: "illustrations/customer-journey-optimization.png" }) {
        childImageSharp {
          gatsbyImageData(width: 375, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      fyncomLogoLight: file(relativePath: { eq: "fyncom-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED, placeholder: BLURRED)
        }
      }
      fyncomLogoDark: file(relativePath: { eq: "fyncom-logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, layout: FIXED, placeholder: BLURRED)
        }
      }
      mobileMarketing: file(relativePath: { eq: "illustrations/marketing-mobile-survey.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      phoneCalls: file(relativePath: { eq: "illustrations/sales-phone-calls.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      closingDeals: file(relativePath: { eq: "close-deals-customers-engagement.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      nanoQrCode: file(relativePath: { eq: "DepositNanoQRCode.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      fyncomLogoWhite: file(relativePath: { eq: "fyncom-logo-white-blank.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [32, 44, 64, 80])
        }
      }
      linkedInlogo: file(relativePath: { eq: "logos/linkedin-white-96.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, layout: FIXED, placeholder: BLURRED)
        }
      }
      fbLogo: file(relativePath: { eq: "logos/facebook_logo_secondary_white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, layout: FIXED, placeholder: BLURRED)
        }
      }
      xLogo: file(relativePath: { eq: "logos/x-logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 24, layout: FIXED, placeholder: BLURRED)
        }
      }
      fyncomProductLogoLight: file(relativePath: { eq: "karmacall-site/fyncom-product.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160, layout: FIXED, placeholder: BLURRED)
        }
      }
      fyncomProductLogoDark: file(relativePath: { eq: "karmacall-site/fyncom-product-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 160, layout: FIXED, placeholder: BLURRED)
        }
      }
      karmacallLogoNoTaglineLight: file(relativePath: { eq: "karmacall-logo-no-tagline.png" }) {
        childImageSharp {
          gatsbyImageData(width: 110, layout: FIXED, placeholder: BLURRED)
        }
      }
      karmacallLogoNoTaglineDark: file(relativePath: { eq: "karmacall-logo-white-no-tagline.png" }) {
        childImageSharp {
          gatsbyImageData(width: 110, layout: FIXED, placeholder: BLURRED)
        }
      }
      karmaCall: file(relativePath: { eq: "karmacall-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [44, 88, 132, 176, 220, 264, 300])
        }
      }
      karmaCallDark: file(relativePath: { eq: "karmacall-logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [44, 88, 132, 176, 220, 264, 300])
        }
      }
      heroKarmaCallImage: file(relativePath: { eq: "karmacall-site/calling_phone.svg" }) {
        publicURL
      }
      standingKarmaCallPost: file(relativePath: { eq: "karmacall-site/subscriber_footstool.svg" }) {
        publicURL
      }
      oneMillionCups: file(relativePath: { eq: "karmacall-site/1-million-cups-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      oneMillionCupsDark: file(relativePath: { eq: "karmacall-site/1-million-cups-white-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      disruptionBanking: file(relativePath: { eq: "karmacall-site/disruption-banking-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "#FFFFFF")
        }
      }
      disruptionBankingDark: file(relativePath: { eq: "karmacall-site/disruption-banking-logo-white.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED, backgroundColor: "#FFFFFF")
        }
      }
      foundersNetwork: file(relativePath: { eq: "logos/founders network.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      gasseeConsulting: file(relativePath: { eq: "logos/Gassée-Consulting-logo-transparent.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      nanoFoundation: file(relativePath: { eq: "logos/nano foundation.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      titaniusBots: file(relativePath: { eq: "logos/titanius bots.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      evonexus: file(relativePath: { eq: "karmacall-site/evonexus-logo_dark.svg" }) {
        publicURL
      }
      evonexusDark: file(relativePath: { eq: "karmacall-site/evonexus-logo_light.svg" }) {
        publicURL
      }
      smugLady: file(relativePath: { eq: "karmacall-site/smug-lady-phone.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      harold: file(relativePath: { eq: "karmacall-site/harold-getting-a-call.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      happyLady: file(relativePath: { eq: "karmacall-site/smiling-lady-on-phone.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      goaheadVentures: file(relativePath: { eq: "logos/goahead-ventures-logo.svg" }) {
        publicURL
      }
      title3funds: file(relativePath: { eq: "logos/title-3-funds-logo-512pxH.png" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      westcliffUniversity: file(relativePath: { eq: "logos/westcliff-university-logo.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      westcliffUniversityDark: file(relativePath: { eq: "logos/westcliff-blue-white-logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  return {
    heroKarmaCallImage: data.heroKarmaCallImage.publicURL,
    standingKarmaCallPost: data.standingKarmaCallPost.publicURL,
    evonexus: data.evonexus.publicURL,
    evonexusDark: data.evonexusDark.publicURL,
    karmacallImage: getImage(data.karmaCall.childImageSharp.gatsbyImageData),
    karmacallImageDark: getImage(data.karmaCallDark.childImageSharp.gatsbyImageData),
    oneMillionCups: getImage(data.oneMillionCups.childImageSharp.gatsbyImageData),
    oneMillionCupsDark: getImage(data.oneMillionCupsDark.childImageSharp.gatsbyImageData),
    disruptionBanking: getImage(data.disruptionBanking.childImageSharp.gatsbyImageData),
    disruptionBankingDark: getImage(data.disruptionBankingDark.childImageSharp.gatsbyImageData),
    smugLady: getImage(data.smugLady.childImageSharp.gatsbyImageData),
    harold: getImage(data.harold.childImageSharp.gatsbyImageData),
    happyLady: getImage(data.happyLady.childImageSharp.gatsbyImageData),
    fyncomProductLogoLight: getImage(data.fyncomProductLogoLight.childImageSharp.gatsbyImageData),
    fyncomProductLogoDark: getImage(data.fyncomProductLogoDark.childImageSharp.gatsbyImageData),
    karmacallLogoNoTaglineLight: getImage(data.karmacallLogoNoTaglineLight.childImageSharp.gatsbyImageData),
    karmacallLogoNoTaglineDark: getImage(data.karmacallLogoNoTaglineDark.childImageSharp.gatsbyImageData),
    filterImage: getImage(data.fyncomFilterGmail.childImageSharp.gatsbyImageData),
    filterImageDark: getImage(data.fyncomFilterGmailDark.childImageSharp.gatsbyImageData),
    increaseResponseRates: getImage(data.increaseResponseRates.childImageSharp.gatsbyImageData),
    tinderLogo: getImage(data.tinderLogo.childImageSharp.gatsbyImageData),
    discordLogo: getImage(data.discordLogo.childImageSharp.gatsbyImageData),
    telegramLogo: getImage(data.telegramLogo.childImageSharp.gatsbyImageData),
    appStoreBadge: getImage(data.appStoreBadge.childImageSharp.gatsbyImageData),
    googlePlayBadge: getImage(data.googlePlayBadge.childImageSharp.gatsbyImageData),
    teamMeeting: getImage(data.teamMeeting.childImageSharp.gatsbyImageData),
    innovation: getImage(data.innovation.childImageSharp.gatsbyImageData),
    collaboration: getImage(data.collaboration.childImageSharp.gatsbyImageData),
    transparency: getImage(data.transparency.childImageSharp.gatsbyImageData),
    customerFocus: getImage(data.customerFocus.childImageSharp.gatsbyImageData),
    continuousImprovement: getImage(data.continuousImprovement.childImageSharp.gatsbyImageData),
    fyncomFiltersWords: getImage(data.fyncomFiltersWords.childImageSharp.gatsbyImageData),
    fyncomFiltersWordsDark: getImage(data.fyncomFiltersWordsDark.childImageSharp.gatsbyImageData),
    heroImageFilter: getImage(data.heroImageFilter.childImageSharp.gatsbyImageData),
    emailFilterFyncom: getImage(data.emailFilterFyncom.childImageSharp.gatsbyImageData),
    getPaidToBlockSpamEmails: getImage(data.getPaidToBlockSpamEmails.childImageSharp.gatsbyImageData),
    cleanInboxCleanMind: getImage(data.cleanInboxCleanMind.childImageSharp.gatsbyImageData),
    sendgrid: getImage(data.sendgrid.childImageSharp.gatsbyImageData),
    slicktext: getImage(data.slicktext.childImageSharp.gatsbyImageData),
    zapier: getImage(data.zapier.childImageSharp.gatsbyImageData),
    handshake: getImage(data.handshake.childImageSharp.gatsbyImageData),
    collaborate: getImage(data.collaborate.childImageSharp.gatsbyImageData),
    effectiveSpend: getImage(data.effectiveSpend.childImageSharp.gatsbyImageData),
    integrations: getImage(data.integrations.childImageSharp.gatsbyImageData),
    salesHeroImage: getImage(data.salesHeroImage.childImageSharp.gatsbyImageData),
    increaseBookings: getImage(data.increaseBookings.childImageSharp.gatsbyImageData),
    accelerateDeals: getImage(data.accelerateDeals.childImageSharp.gatsbyImageData),
    minMax: getImage(data.minMax.childImageSharp.gatsbyImageData),
    customerHeroImage: getImage(data.customerHeroImage.childImageSharp.gatsbyImageData),
    seamlessIntegrations: getImage(data.seamlessIntegrations.childImageSharp.gatsbyImageData),
    loyalCustomers: getImage(data.loyalCustomers.childImageSharp.gatsbyImageData),
    driveAdoption: getImage(data.driveAdoption.childImageSharp.gatsbyImageData),
    fyncomLogoLight: getImage(data.fyncomLogoLight.childImageSharp.gatsbyImageData),
    fyncomLogoDark: getImage(data.fyncomLogoDark.childImageSharp.gatsbyImageData),
    mobileMarketing: getImage(data.mobileMarketing.childImageSharp.gatsbyImageData),
    phoneCalls: getImage(data.phoneCalls.childImageSharp.gatsbyImageData),
    closingDeals: getImage(data.closingDeals.childImageSharp.gatsbyImageData),
    nanoQrCode: getImage(data.nanoQrCode.childImageSharp.gatsbyImageData),
    fyncomLogoWhite: getImage(data.fyncomLogoWhite.childImageSharp.gatsbyImageData),
    foundersNetwork: getImage(data.foundersNetwork.childImageSharp.gatsbyImageData),
    gasseeConsulting: getImage(data.gasseeConsulting.childImageSharp.gatsbyImageData),
    nanoFoundation: getImage(data.nanoFoundation.childImageSharp.gatsbyImageData),
    titaniusBots: getImage(data.titaniusBots.childImageSharp.gatsbyImageData),
    goaheadVentures: data.goaheadVentures.publicURL,
    title3funds: getImage(data.title3funds.childImageSharp.gatsbyImageData),
    westcliffUniversity: getImage(data.westcliffUniversity.childImageSharp.gatsbyImageData),
    westcliffUniversityDark: getImage(data.westcliffUniversityDark.childImageSharp.gatsbyImageData),
    linkedInlogo: getImage(data.linkedInlogo.childImageSharp.gatsbyImageData),
    fbLogo: getImage(data.fbLogo.childImageSharp.gatsbyImageData),
    xLogo: getImage(data.xLogo.childImageSharp.gatsbyImageData),
  }
}
