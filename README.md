
# Flat White & Mocha

The website renders different specialty coffee shops in Madrid.

The coffee shops are listed by their name, picture and a rating.

By clicking on each card, you can find out more about the coffee shop, its description and its location and add it to your favorites list if you create a user account :)

### Deployment
https://flat-white-and-mocha.herokuapp.com/

![Captura de pantalla 2022-04-07 a las 14 00 57](https://user-images.githubusercontent.com/86075066/162196106-6ce18d94-a3b8-47c6-ab3d-c28f8d7504c1.png)
![Captura de pantalla 2022-04-07 a las 14 12 39](https://user-images.githubusercontent.com/86075066/162196130-dad90b87-29f6-48c0-b3be-9ce164d80ac5.png)
![Captura de pantalla 2022-04-07 a las 14 13 09](https://user-images.githubusercontent.com/86075066/162196149-8651a809-0f6e-4c4d-a31c-179c409064fd.png)


## Authors
- [@Hiba Berber](https://github.com/Hibaber)
- [@Laura del Valle](https://github.com/LDVB)

## Installation

#### Install my-project with npm.
```bash
  npm install
```
#### Server Usage.
```bash
  npm run dev
```
#### Server .env variables needed
PORT=3000

ORIGIN=http://localhost:3000

MONGODB_URI

SESS_SECRET

CLOUDINARY_NAME

CLOUDINARY_KEY

CLOUDINARY_SECRET

GOOGLE_MAPS

## API Reference

#### Apis
Google Maps
Cloudinary 

#### Server
| Method      | Type                    | Description
| :--------   | :-------                | :--------------------------------
|   `GET`     | `/`                     |  Homepage
|   `GET`     | `/signup`               |  Create a user account 
|   `POST`    | `/signup`               |
|   `GET`     | `/login`                |  Log into an existing account
|   `POST`    | `/login`                |
|   `POST`    | `/logout`               |  Log out from the current session
|   `GET`     | `/user/:id/profile`     |  Shows the user profile
|   `GET`     | `/admin/:id/profile`    |  Shows the admin profile
|   `GET`     | `/create-cafeteria`     |  Allows the admin to create a new coffee shop
|   `POST`    | `/create-cafeteria`     |
|   `GET`     | `/cafeterias`           |  Shows the list of coffee shops
|   `GET`     | `/details/:id/cafeteria`|  Shows the details of a coffee shop
|   `GET`     | `/edit/:id/cafeteria`   |  Allows the admin to  edit a coffee shop 
|   `POST`    | `/edit/:id/cafeteria`   | 
|   `DELETE`  | `/delete/:id/cafeteria` |  Allows the admin to  delete a coffee shop 
