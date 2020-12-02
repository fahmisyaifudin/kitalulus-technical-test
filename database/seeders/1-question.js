
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert({
          tableName: 'questions',
          schema: 'public'
        },
        [
            {
                uuid: '3365418d-dab0-4713-ae36-1fddf6ac8b82',
                question: 'Question 1?',
                createdBy: 'admin',
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                uuid: 'd0fe95d8-73ef-4b1d-8fde-2066a1b4e9d5',
                question: 'Question 2?',
                createdBy: 'admin',
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                uuid: 'e4020df5-630e-4830-8e50-5ccac3c85d23',
                question: 'Question 3?',
                createdBy: 'admin',
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete({
        tableName: 'questions',
        schema: 'public'
      }, null, {});
  
    }
  };