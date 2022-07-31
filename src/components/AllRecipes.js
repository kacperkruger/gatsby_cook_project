import React from "react"
import TagList from "./TagList"
import RecipeList from "./RecipeList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  return (
    <section className={"recipes-container"}>
      <TagList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
