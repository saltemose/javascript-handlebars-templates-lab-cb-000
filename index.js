function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  initForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = getRecipeVals();

  var recipeTemplate = document.getElementById("recipe-template").innerHTML
}
