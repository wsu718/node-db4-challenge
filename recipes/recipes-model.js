const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
};

function getShoppingList(recipe_id) {
    return db('steps')
        .where({ recipe_id: recipe_id })
        .join('ingredients', 'steps.ingredient_id', 'ingredients.id')
        .select('steps.ingredient_quantity', 'ingredients.ingredient_name')
};

function getInstructions(recipe_id) {
    return db('steps')
        .where({ recipe_id: recipe_id })
        .join('ingredients', 'steps.ingredient_id', 'ingredients.id')
        .join('recipes', 'recipes.id', 'steps.recipe_id')
}

