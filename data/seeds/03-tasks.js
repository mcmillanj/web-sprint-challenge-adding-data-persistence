
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
  .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
          { task_description: 'Do react', project_id: 1 },
          { task_description: 'Do node', task_notes: 'Use Postman!', project_id: 1 },
          { task_description: 'Do express', task_notes: 'add express', task_completed: 1, project_id: 2 }
      ]);
  });
}; 
