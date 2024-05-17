
# API de Aplicacion de Gastos

📍 Deberán realizar una API que simule ser una app de gastos. La misma contará con la funcionalidad de guardar los gastos y datos de un usuario. Además, debe permitir realizar:

- post
- get 
- getId

sin necesidad de tener un JSON de manera local, sino que esté persistido en la DB (Mongo Atlas).
## Deployment
- Para instalar todas las dependencias ejecutar el comando:
```bash
npm install
```

- Para iniciar el servidor de MongoDB ejecuta el comando:
```bash
  npm run dev
```


## API Reference


#### GET users
Obtener todos los usuarios de la DB:

```http
  GET /api/users/
```
#### GET user by DNI
Obtener un usuario especifico de la DB:
```http
  GET /api/items/${dni}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dni`      | `number` | **Required**. Dni del usuario a consultar |

#### POST user
Crear un nuevo usuario en la DB:

```http
  POST /api/users/
```

#### UPDATE user
Actualizar los datos de usuario en la DB:

```http
  PUT /api/users/${dni}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dni`      | `number` | **Required**. Dni del usuario a modificar |

#### DELETE user
Eliminar un usuario especifico de la DB:

```http
  PUT /api/users/${dni}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `dni`      | `number` | **Required**. Dni del usuario a eliminar |



## Variables de entorno
Para ejecutar este proyecto, debes modificar el archivo `config.ts` dentro de la carpeta `/src` con tus propias credenciales de MongoDB:

- `PORT`: El puerto donde se ejecutara el servidor.

- `MONGODB_URI`: La cadena de conexion de la base de datos de MongoDB.

