
//for sequelize
const sequelize = require('sequelize');
//create one todos.db file
const db = new sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/todos.db'
});
//create notes table
const notes = db.define('notes', {
    id : {
        type : sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    note : {
        type : sequelize.STRING(1000) 
    }
})

//create todos table
const Todos = db.define('Todos', {
    id : {
        type : sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title : {
        type : sequelize.STRING(50),
        allowNull: false
    },

    description : {
        type : sequelize.STRING(100) 
    },

    due : {
        type : sequelize.DATEONLY,
        allowNull: false
    },

    status : {
        type : sequelize.BOOLEAN,
        defaultValue : true
    },

    priority : {
        type : sequelize.ENUM,
        values : ['high', 'medium', 'low'],
        defaultValue : true,
        allowNull: false
    }

});
Todos.hasMany(notes);//1 Todo contains of many notes
notes.belongsTo(Todos);//1 to many relationship

module.exports = {
    db, Todos, notes
};