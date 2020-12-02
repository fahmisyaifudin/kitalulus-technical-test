import db from '../database/models';

// console.log(db.sequelize);

db.sequelize.sync({ force: true })
    .catch(err => console.log(err.message))
    .finally(() => db.sequelize.close());