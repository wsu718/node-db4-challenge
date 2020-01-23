
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128)
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128)
                .notNullable()
                .unique();
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('step_number')
                .unsigned()
                .notNullable()
            tbl.string('step_description', 128)
                .notNullable()
            tbl.float('ingredient_quantity')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
            tbl.integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
