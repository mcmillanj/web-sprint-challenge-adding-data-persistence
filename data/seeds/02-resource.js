
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
  .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
          { resource_name: ' react' },
          { resource_name: 'redux', resource_description: 'react redux' }
      ]);
  });
}; 