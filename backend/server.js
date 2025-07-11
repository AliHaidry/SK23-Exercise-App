const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/** Original way connection. */
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }
// );


/** Update way of connection. */
mongoose.connect("mongodb+srv://alihaidry:@england@11@friends-database-cluste.mduy0d1.mongodb.net/?retryWrites=true&w=majority&appName=Friends-Database-Cluster00",
{useNewUrlParser:true}
);



/*
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log("connection failed");
});
*/
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});