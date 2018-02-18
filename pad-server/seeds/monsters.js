exports.seed = function(knex, Promise) {

    return knex("monsters").del()
        .then(function () {
            return knex("monsters").insert([
                { id: 1, name: 'Tyrra'    },
                { id: 2, name: 'Tyran'    },
                { id: 3, name: 'Tyrannos' }
            ]);
        });
};
