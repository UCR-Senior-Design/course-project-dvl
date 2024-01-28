require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3500
const CONNECTION_URL = process.env.DATABASE_URI

const resumeRoutes =  require('./routes/resumes.js')
const userRouter =  require("./routes/user.js")

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/resumes', resumeRoutes);
app.use("/user", userRouter);

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
