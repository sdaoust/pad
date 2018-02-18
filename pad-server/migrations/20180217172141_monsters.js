exports.up = function(knex, Promise) 
{
	return knex.schema.createTable("monsters", function(monsterTable) {
		monsterTable.increments("id").primary();
		monsterTable.string("name").unique().notNullable();
		monsterTable.timestamps();
	});
};

exports.down = function(knex, Promise) 
{
	return knex.schema.dropTableIfExists("monsters");
};
