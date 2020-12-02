const sequelizePaginate = require('sequelize-paginate')

'use strict';

module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('questions', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedBy: {
        type: DataTypes.STRING
    },
    deletedAt : {
        type: DataTypes.DATE
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
  }, {
    // options
  });
  sequelizePaginate.paginate(question);
  return question;
};