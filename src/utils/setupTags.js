const setupTags = recipes => {
  const recipeTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      recipeTags.hasOwnProperty(tag)
        ? (recipeTags[tag] = recipeTags[tag] + 1)
        : (recipeTags[tag] = 1)
    })
  })
  return Object.entries(recipeTags).sort((arr1, arr2) => {
    const [firstTag] = arr1
    const [secondTag] = arr2
    return firstTag.localeCompare(secondTag)
  })
}

export default setupTags
