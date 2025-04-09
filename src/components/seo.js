/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, lang = "en", children }) {
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

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
    >
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata?.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={site.siteMetadata?.siteUrl + site.siteMetadata?.image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={site.siteMetadata?.siteUrl} />
      <meta name="twitter:creator" content={site.siteMetadata?.twitterUsername || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={site.siteMetadata?.siteUrl + site.siteMetadata?.image} />
      
      {/* Additional SEO */}
      <meta name="keywords" content="anti-spam, rewards, customer engagement, email security, communication security, cash back, CRM rewards, interactive marketing" />
      <link rel="canonical" href={site.siteMetadata?.siteUrl} />
      {children}
    </Helmet>
  )
}

export default Seo
