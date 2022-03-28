
# Flat White & Mocha
The website renders different specialty coffee shops in Madrid.
The coffee shops are listed with their name, photo and a corresponding rating.
By clicking on each card, you can find the coffee shop description and its location

### Deployment
https://flat-white-and-mocha.herokuapp.com/

<img width="1415" alt="Captura de pantalla 2022-03-28 a las 17 33 19" src="https://user-images.githubusercontent.com/86075066/160434711-18deb9f7-3ad3-4b48-8a1e-c2a450c33635.png">
<img width="1386" alt="Captura de pantalla 2022-03-28 a las 17 40 42" src="https://user-images.githubusercontent.com/86075066/160435714-9986f9f3-0d05-46b3-8a73-812e1f783955.png">


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
