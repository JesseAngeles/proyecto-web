import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import User from "../interfaces/users";

class UserModel extends Model<User> implements User {
    public user_id!: number;
    public name!: string;
    public email!: string;
    public username!: string;
    public password!: string;
}

UserModel.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "user",
        sequelize,
    }
);

export default UserModel;
