import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <Layout>
      <main className={"page"}>
        <section className={"about-page"}>
          <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium asperiores beatae consequatur dolores enim
              exercitationem harum impedit ipsum iusto laborum minima modi nemo
              nihil perferendis, rem rerum unde voluptas voluptatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              blanditiis debitis possimus ratione sapiente veniam. Assumenda ea
              error esse fugit inventore, ipsam iure nostrum obcaecati qui
              sapiente sit veritatis voluptate.
            </p>
            <Link to={"/contact"} className={"btn"}>
              contact
            </Link>
          </article>
          <StaticImage
            src={"../assets/images/about.jpeg"}
            alt={"about"}
            className={"about-img"}
            placeholder={"blurred"}
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
