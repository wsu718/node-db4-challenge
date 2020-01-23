
exports.seed = function (knex) {
  return knex('recipes').insert([
    {
      recipe_name: 'Chocolate Chip Cookies'
    },
    {
      recipe_name: 'Banana Bread'
    },
    {
      recipe_name: 'No-bake Cookies'
    }
  ]);
};
