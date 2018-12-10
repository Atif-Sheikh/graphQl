const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb url")

mongoose.connection.once('open',() => {
    console.log('connected to database')
})
app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

const PORT = 4000;
app.listen(PORT,() => {
    console.log(`now listining port ${PORT}`)
})