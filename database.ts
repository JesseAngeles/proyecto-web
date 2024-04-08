import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('dof', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: false
    }
});

export default sequelize;