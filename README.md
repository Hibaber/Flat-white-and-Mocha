
# Flat White & Mocha
The website shows different specialty coffee shops in Madrid.
The coffee shops are listed with their name, photo and a rating.
By clicking on each card, you can find the coffee shop description and its location

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