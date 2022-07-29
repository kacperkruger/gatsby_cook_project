import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index} className={"item"}>
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className={"galleryImg"}
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .galleryImg {
    border-radius: 1rem;
  }
`

export default Gallery
