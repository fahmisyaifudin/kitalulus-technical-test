'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "questions", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2020-12-02T04:35:19.413Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
        fn: "createTable",
        params: [
            "questions",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "uuid": {
                    "type": Sequelize.UUID,
                    "field": "uuid",
                    "defaultValue": Sequelize.UUIDV4
                },
                "question": {
                    "type": Sequelize.STRING,
                    "field": "question",
                    "allowNull": false
                },
                "createdBy": {
                    "type": Sequelize.STRING,
                    "field": "createdBy",
                    "allowNull": false
                },
                "updatedBy": {
                    "type": Sequelize.STRING,
                    "field": "updatedBy"
                },
                "deletedAt": {
                    "type": Sequelize.DATE,
                    "field": "deletedAt"
                },
                "isActive": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isActive",
                    "defaultValue": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {
                "transaction": transaction
            }
        ]
    }];
};
var rollbackCommands = function(transaction) {
    return [{
        fn: "dropTable",
        params: ["questions", {
            transaction: transaction
        }]
    }];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
