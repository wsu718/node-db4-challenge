
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'milk' },
    { ingredient_name: 'butter' },
    { ingredient_name: 'cocoa powder' },
    { ingredient_name: 'peanut butter' },
    { ingredient_name: 'oats' },
    { ingredient_name: 'vanilla extract' },
    { ingredient_name: 'sugar' },
    { ingredient_name: 'egg' },
    { ingredient_name: 'flour' },
    { ingredient_name: 'baking soda' },
    { ingredient_name: 'salt' },
    { ingredient_name: 'chocolate chips' },
    { ingredient_name: 'banana' }
  ]);
};



