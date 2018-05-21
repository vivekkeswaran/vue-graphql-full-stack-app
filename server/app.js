// package to run the express server
const express = require("express");

// enabling cors with connect/express
const cors = require('cors');

// Works as a middleware to create an communication between the express and the graphql
const graphqlHTTP = require('express-graphql');

// import the schema file for the middleware
const schema = require('./schema/schema');

// Mongoose instance to connect MongoDB
const mongoose = require('mongoose');

//  connect to Mongo DB using the connection string as follows
mongoose.connect("mongodb://<dbuser>:<dbpassword>@<serverip:port>/<database-name>");
mongoose.connection.once("open", () => {
    console.log("Database Connection Succefully Established");
});

// create a app using express
const app = express();
app.use(cors());

// route configuration when the url routes to 
// localhost:4000/graphql which will be used to connect with graphql server
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// set the express server to host on the location port 4000
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})