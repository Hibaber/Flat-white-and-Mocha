
# Welcome to Flat White & Mocha

We are Laura and Hiba, 2 coffee lovers who decided to make their backend module project about tasty specialty coffee shops in Madrid
## API Reference



```http
Flat White & Mocha endpoints
```

| Method    | Type     | Description                       | Method
| :-------- | :------- | :-------------------------------- |:-------- 
|   `GET`     | `/` |  Renderiza la página principal  |       |
|   `GET`     | `/signup` |  Renderiza la página del registro del usuario / admin          |User/admin |
|   `POST`    | `/signup` |  Gestiona el formulario de inscripción del usuario/ admin      |User/ admin|
|   `GET`     | `/login` |  Renderiza el perfil del usuario / admin                        |User/admin |        
|   `POST`    | `/login` |  Gestiona el formulario del perfil del usuario/ admin           |User/admin |   
|   `POST`    | `/logout` |  Gestiona el formulario del perfil del usuario/ admin          |User/admin |      
|   `GET`     | `/user-profile` |  Renderiza la página del perfil del usuario              |User/admin |    
|   `GET`     | `/admin-profile` |  Renderiza la página del perfil del administrador       |User/admin | 
|   `GET`     | `/create-cafeteria` | Renderiza la página de creación de cafeterías        |    admin  |
|   `POST`    | `/create-cafeteria` | Gestiona el formulario de creación de las cafeterías |   admin    |
|   `GET`     | `/cafeterias` | Renderiza la página de la lista de cafeterías              |   admin    |
|   `GET`     | `/details/:id/cafeteria` | Renderia los detalles de la cafetería              |   admin    |
|   `GET`     | `/edit/:id/cafeteria` | Renderia los detalles de la cafetería                   |   admin    |
|   `POST`    | `/edit/:id/cafeteria` | Gestiona el formulario de creación de cafetería         |   admin    |
|   `DELETE`  | `/delete/:id/cafeteria`| Gestiona el formulario de eliminación de cafetería|   admin    |
|   `GET`     | `/create-shop` | Renderiza la página de las cafeterías                     | admin     |
|   `POST`    | `/create-shop` | Gestiona el formulario de creación de las cafeterías      |   admin    |
|   `GET`     | `/shops` | Renderiza la página de la lista de tiendas de café              |       |
|   `GET`     | `/details/:id/shop` | Renderia los detalles de la tienda                   |       |
|   `GET`     | `/edit/:id/shop` | Renderiza el formulario de creación de tiendas de café  |   admin    |
|   `POST`    | `/edit/:id/shop` | Gestiona el formulario de creación de tiendas de café   |   admin    |
|   `DELETE`  | `/delete/:id/shop` | Gestiona el formulario de eliminación de tiendas de café  |   admin    |
|   `GET`     | `/about-coffee` | Renderiza la página de información sobre el café                   |       |
|   `GET`     | `/coffee-benefits` | Renderiza la página de beneficios del café                      |       |



## Authors

- [@Laura Del Valle](https://www.github.com/LDVB)
- [@Hiba Berber](https://github.com/Hibaber)






