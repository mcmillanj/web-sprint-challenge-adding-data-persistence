
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'learn c++', project_description: 'Embedded' },
        { project_name: 'learn sql', project_description: 'learn sgl', project_completed: 1 },
        { project_name: 'java' }
      ]);
    });
};
