/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, lang = "en", keywords = [], children, pathname = "", image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            image
            author
            twitterUsername
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const defaultKeywords = [
    "anti-spam",
    "rewards",
    "customer engagement",
    "email security",
    "communication security",
    "cash back",
    "CRM rewards",
    "interactive marketing",
    "refundable deposits",
    "fyncom",
  ]
  const metaKeywords = keywords.length > 0 ? keywords : defaultKeywords
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : site.siteMetadata.siteUrl
  const metaImage = image || site.siteMetadata?.image
  const fullImageUrl = metaImage?.startsWith("http") ? metaImage : `${site.siteMetadata?.siteUrl}${metaImage}`

  return (
    <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={metaKeywords.join(", ")} />
      <meta name="author" content={site.siteMetadata?.author || ``} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="FynCom" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.twitterUsername || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Robots and canonical */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />

      {/* Additional SEO tags */}
      <meta name="application-name" content="FynCom" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="FynCom" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {children}
    </Helmet>
  )
}

export default Seo
