
exports.seed = function (knex) {
  return knex('steps').insert([
    {
      step_number: 1,
      step_description: 'Preheat the over to 350F',
      ingredient_quantity: null,
      recipe_id: 1,
      ingredient_id: null,
    },
    {
      step_number: 2,
      step_description: 'Add',
      ingredient_quantity: .5,
      recipe_id: 1,
      ingredient_id: 2,
    },
    {
      step_number: 3,
      step_description: 'Add',
      ingredient_quantity: .5,
      recipe_id: 1,
      ingredient_id: 7,
    },
    {
      step_number: 4,
      step_description: 'Add',
      ingredient_quantity: 2,
      recipe_id: 1,
      ingredient_id: 6,
    },
    {
      step_number: 5,
      step_description: 'Add',
      ingredient_quantity: 1,
      recipe_id: 1,
      ingredient_id: 8,
    },
    {
      step_number: 6,
      step_description: 'Add',
      ingredient_quantity: 1.75,
      recipe_id: 1,
      ingredient_id: 9,
    },
    {
      step_number: 7,
      step_description: 'Add',
      ingredient_quantity: .5,
      recipe_id: 1,
      ingredient_id: 10,
    },
    {
      step_number: 8,
      step_description: 'Add',
      ingredient_quantity: .5,
      recipe_id: '1',
      ingredient_id: 11,
    },
    {
      step_number: 9,
      step_description: 'Mix dough',
      ingredient_quantity: null,
      recipe_id: 1,
      ingredient_id: null,
    },
    {
      step_number: 10,
      step_description: 'Bake for 7-10 minutes',
      ingredient_quantity: null,
      recipe_id: 1,
      ingredient_id: null,
    },
  ]);
};
