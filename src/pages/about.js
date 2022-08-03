import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import RecipeList from "../components/RecipeList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title={"About"} />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium asperiores beatae consequatur dolores enim
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              blanditiis debitis possimus ratione sapiente veniam.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        title
      }
    }
  }
`

export default About
