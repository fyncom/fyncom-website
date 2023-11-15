import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BlogPost from '../../components/blog-post';
import '../../components/help-center.css';
import Seo from "../../components/seo";
import { graphql, Link } from 'gatsby'
import {Wrapper} from "../../components/Markdown-Wrapper";

export default function BlogIndex({ data }) {
  return (
    <Wrapper>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <div key={id}>
            <h2>
              <Link to={`/blog/${fields.slug}`}>
                {frontmatter.title}
              </Link>
            </h2>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`
