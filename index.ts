import express from "express";
import usersRouter from "./src/routes/users";
import sequelize from "./database";

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  app.listen(8080, () => console.log("Servidor activo en el puerto 8080"));
}).catch((error) => {
  console.error("Error al sincronizar la base de datos:", error);
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/users', usersRouter);

process.on('SIGINT', async () => {
  try {
    await sequelize.close();
    console.log('Conexión cerrada, la aplicación se apaga.');
    process.exit(0);
  } catch (error) {
    console.error('Error al cerrar la conexión:', error);
    process.exit(1);
  }
});