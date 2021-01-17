Shopify-img
=========

##  Project Description

This app was created for Shopify's backend intern application task. The app let's users to add photos and the photos are stored in Amazon S3 bucket securely. After user add's the photos, the photos are displayed in a gallery. The user should register and be logged in otherwise the user cannot upload any picture.

## How to Setup

1. Fork and clone [shopify-img](https://github.com/kutluduman/shopify-img). Follow the instructions on the github page of shopify-img.

2. Install all dependencies (npm install from Terminal) within project directories client-side and express-backend.

3. Copy the .env.copy file into your local and add your aws credentials for successful S3 bucket and RDS configuration.

4. Open up two terminals. First will be used for the express-backend and the other one will be used for client-side directories. 

5. Within each of the terminals, run "npm start". 

6.  The app will be served at http://localhost:3000/.


## Important Notes:


**Max Files**

You can change maximum files that could be uploaded from Uploads component inside client components folder.
 Right now it is configured to 5 files.

**S3 Bucket Configuration**

In order to store successfuly at AWS S3 Bucket, from the server side, from uploads route, becareful with the configuration of your AWS S3 Bucket name and region. If it is entered wrongly, there won't be communication and your photos won't be stored.

**Reset Database for User Registration**

If you want to reset your database for users, use your terminal and navigate to server side and run this command:
npm run db:reset


**Reset Database for Photos MetaData**

You can reset the database by using sequelize commands. Run first npx sequelize-cli db:migrate:undo and then npx sequelize-cli db:migrate, this will reset and migrate your database tables.




## Stacks


- Front-End: React, Material UI, Styled-Components, Axios, React-Dropzone-Uploader, React-Image-Gallery, React-Router

- Back-End: Express, PostgreSQL, Sequelize, Sharp, Multer, AWS-SDK, Bcrypt, Cors



## Further Planned Updates

- Users should be able to remove photos from the gallery.
- Users should be able to click like to favorite photos from their gallery.
- Users should be able to share their photos to other platforms.

If you have any question or comment, please contact me from kutluduman@gmail.com. Thank you :) 


## Screenshots


