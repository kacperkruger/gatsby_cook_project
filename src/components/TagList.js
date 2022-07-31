import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagList = ({ recipes }) => {
  const tags = setupTags(recipes)
  return (
    <div className={"tags-container"}>
      <h4>recipes</h4>
      <div className={"tags-list"}>
        {tags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
