import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipeList from "../components/RecipeList"

const TagTemplate = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
  pageContext: { tag },
}) => {
  return (
    <Layout>
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
