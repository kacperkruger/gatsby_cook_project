import React from "react"
import TagList from "./TagList"
import RecipeList from "./RecipeList"

const AllRecipes = () => {
  return (
    <div>
      <h4>All recipes</h4>
      <TagList />
      <RecipeList />
    </div>
  )
}

export default AllRecipes
