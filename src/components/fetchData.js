import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        simpleData
        title
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  console.log(data)
  return (
    <div>
      <h1>Hello from fetchData</h1>
    </div>
  )
}

export default FetchData
