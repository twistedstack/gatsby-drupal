import React from "react"
import { graphql } from "gatsby"
const Blog = ({ data }) => (
  <div>
    <h1>Blog</h1>
    <ul>
      {data.blog.edges.map(({ node }) => (
        <li >
          {node.title}
        </li>
      ))}
    </ul>
  </div>
)
export default Blog

export const query = graphql`
  query {
    blog: allNodeBlog(limit: 1000) {
      edges {
        node {
          title
        }
      }
    }
  }
`