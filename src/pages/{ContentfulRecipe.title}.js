import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/all"

const RecipeTemplate = ({ data }) => {
  console.log(data)
  const {
    title,
    cookTime,
    content: { tags, instructions, ingredients, tools },
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  return (
    <Layout>
      <main className={"page"}>
        <div className={"recipe-page"}>
          <section className={"recipe-hero"}>
            <GatsbyImage
              alt={title}
              image={pathToImage}
              className={"about-img"}
            />
            <article className={"recipe-info"}>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className={"recipe-icons"}>
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className={"single-instruction"}>
                    <header>
                      <p>step {index + 1}</p>
                      <div />
                    </header>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p key={index} className={"single-ingredient"}>
                      {ingredient}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className={"single-tool"}>
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      cookTime
      prepTime
      servings
      title
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      content {
        ingredients
        tags
        tools
        instructions
      }
      description {
        description
      }
    }
  }
`

export default RecipeTemplate
