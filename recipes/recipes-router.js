const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get recipes' });
        })
});

// - `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantites for a single recipe

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(list => {
            res.json(list)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get shopping list' });
        })
});

// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(instructions => {
            res.json(instructions)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get instructions' });
        })
});


module.exports = router;

