# Create Simple Application using Graphql + Vue

### UI Screenshot
##### The Data is fetched from MongoDB using GraphQL
![](https://github.com/vivekkeswaran/vue-graphql-full-stack-app/blob/master/screenshots/application-overview.gif)

## Project Overview

1.  Frontend - Vue + Apollo Client
2.  Server - Node Js (Express App) + GraphQL
3.  Database - MongoDB on mLab.com

## Building the Server

Let’s build a simple server. The server will show a bunch of programming languages, and let us view frameworks built with them in detail.

## Installation:

Install vue and vue cli
        
      npm install -g @vue/cli

Next, we need to setup the server to run our GraphQL, we will need a express server running at a specific port to communicate with the GraphQL 
      
      npm install cors express express-graphql graphql --save

Let's quickly go over each package:
  - cors: will let our Vue app query the backend from a different port
  - graphql: dependency of apollo-server-express
  - express: node js server
  - express-graphql: middleware for express for understanding graphql

We will be mLab.com as user interface and cloud server for our MongoDB database. Inorder to communicate with MongoDB, mongoose is used to create the connection from the express server  
    
      npm install mongoose --save

Great. Time to get started on the server. Create a directory server and create a app.js file under it. Visit app.js[link] for the contents. (comments provided for each statement)

## GraphQL

1. Configuring the graphql route path in the app.js file (Please refer app.js file, comments available)

        const app = express();
        app.use('/graphql', graphqlHTTP({ 
            schema, 
            graphiql: true // only used when graphql testing is required
        }));

    -   graphqlHTTP - Instance of the express-graphql
    -   Parameter 1: import schema file which has the mapping of data with database inorder to fetch any combination data using a single API request. (Please refer schema.js file)

    -   Paramter 2: for testing the graphql schema. Copy paste https://localhost/graphiql in browser to see an graphql testing user interface 

2.  Schema File consists of the Mongoose Collections Mapping with the GraphQL Objects. It Consists of the following:
    -   RootQuery: define each object with respective logic to different possible forms of User interations with objects to retreive the data
    -   Mutations: define each object with respective logic to represent a specific form of insertion to database
    -   GraphQLObjectType: each collection and its relation logic with other collections in the database is represented as different GraphQL Objects

3.  GraphQL Components:
    -   GraphQLObjectType: Class to create an GraphQl object intance
    -   GraphQLSchema: Class to create an GraphQl schema
    -   GraphQLString:  GraphQl String Data Type
    -   GraphQLList: GraphQl List Data Type
    -   GraphQLID: GraphQl Id Data Type 
    -   GraphQLInt: GraphQl Integer Data Type
    -   GraphQLNonNull: Validates the value to NOTNULL. Required Value during mutation

Reference: 
1. Full Stack Development with GraphQL (recommended): 
    -   https://www.howtographql.com/vue-apollo/1-getting-started
    -   https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f
2. Vue + Apollo: 
    -   https://github.com/howtographql/howtographql/tree/master/content/frontend/vue-apollo
    -   https://github.com/Akryum/vue-apollo
3. GraphQL Mutation: https://www.apollographql.com/docs/react/essentials/mutations.html
4. Query Exmaple: https://gist.github.com/Akryum/1984037622a80deca17ab78708648671
5. Mutation Example: https://gist.github.com/Akryum/4517947bcf71bd8b3c0960b84060c64a
6. Vue + Apollo: https://www.youtube.com/watch?v=N49R1gifUqs&t=1802s  


### Building the Client (Vue)

Similar to how axios or JQuery is used for accessing RestFul services we need a client which can understand and communicate with GraphQL. There are multiple clients for GraphQL but we will be using Apollo Client
    
      npm install vue-apollo@next graphql apollo-client apollo-link apollo-link-context apollo-link-http apollo-cache-inmemory graphql-tag --save

Let's quickly go over each package:
-  vue-apollo: An Apollo/GraphQL integration for VueJS. We install the latest version of the plugin which allows us to use all the great features that comes with Apollo client 2.0.
-   graphql: A reference implementation of GraphQL for JavaScript.
-   apollo-client: A fully-featured, production ready caching GraphQL client for every server or UI framework.
-   apollo-link: A standard interface for modifying control flow of GraphQL requests and fetching GraphQL results.
-   apollo-link-context: Used to easily set a context on your operation, which is used by other links further down the chain.
-   apollo-link-http: Used to get GraphQL results over a network using HTTP fetch.
-   apollo-cache-inmemory: Cache implementation for Apollo Client 2.0.
-   graphql-tag: A JavaScript template literal tag that parses GraphQL queries.

For Setting up vue Apollo visit: https://github.com/Akryum/vue-apollo#installation
