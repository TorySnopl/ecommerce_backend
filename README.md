# E-commerce Back End Starter Code
Using MYSQL and Sequelize, write route logic that returns the desired data. 

## User Story
>GIVEN a functional Express.js API
>WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
>THEN I am able to connect to a database using Sequelize

>WHEN I enter schema and seed commands
>THEN a development database is created and is seeded with test data

>WHEN I enter the command to invoke the application
>THEN my server is started and the Sequelize models are synced to the MySQL database

>WHEN I open API GET routes in Insomnia Core for categories, products, or tags
>THEN the data for each of these routes is displayed in a formatted JSON

>WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
>THEN I am able to successfully create, update, and delete data in my database

## What I Learned
 This project really helped solidify in my mind the different route concepts. I learned by means of debugging how the different relationships interact and the constraints a foreign key has on a model. The  `onDelete: "CASCADE"` was a really important bit of code to include for the delete route in my products page.
 I feel more confident now in my ability to use MYSQL and Sequelize to write server code in Javascript. 


## Deployed Application
[Github Repo](https://github.com/TorySnopl/ecommerce_backend)

[Video Demonstration]()

## Source Code
Source code was provided by the UofO bootcamp. Additionally some code snippets were used from the Module 13 activities. Major thanks to the AskBCS staff for their assistance.