import React from 'react';
import '../../components/help-center.css';
import { graphql, Link } from 'gatsby'
import {Wrapper} from "../../components/Markdown-Wrapper";
import Img from 'gatsby-image'

export default function BlogIndex({ data }) {
  const seo = {
    title: "Blog FynCom",
    description:
      "Read the latest on how to stay innovative in this evolving digital world",
  }
  return (
    <Wrapper seo={seo}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <div key={id}>
            <h2>
              <Link to={`${fields.slug}`}>{frontmatter.title}</Link>
            </h2>
            <small>{frontmatter.date}</small>
            <p>{frontmatter.description}</p>
            <Img fluid={frontmatter.featuredImage?.childImageSharp?.fluid} />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
// cannot get featuredImage to work
export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`