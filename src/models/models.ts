import {sequelize} from "../db";
import {DataTypes} from "sequelize";


// User
const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    }
});

// Link
const Link = sequelize.define("Link", {
    shortenedUrl: {
        type: DataTypes.STRING,
        unique: true
    },
    rawUrl: {
        type: DataTypes.STRING,
        unique: false
    }
});

User.hasMany(Link, {foreignKey: "id"});
Link.belongsTo(User);

export default {User, Link};